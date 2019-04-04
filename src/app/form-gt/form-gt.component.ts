import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { DomainsService } from '../services/domains.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Message } from 'primeng/components/common/api';
import { TranslateService } from '../../../node_modules/@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import * as $ from 'jquery';

import { map, startWith } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { FileValidatorDirective } from './../file-input-validator.directive';

@Component({
  selector: 'app-form-gt',
  templateUrl: './form-gt.component.html',
  styleUrls: ['./form-gt.component.scss']
})
export class FormGtComponent implements OnInit {

  @Input() formedUser: any;
  @Output() onCancelEvent = new EventEmitter<boolean>();

  user = {
    fullname: '',
    cellphone: '',
    email: '',
    birthdate: '',
    password: '',
    repassword: '',
    department : { name: '' },
    university: { id: '', name: '', local_committee_id: '' },
    college_course: { id: '', name: '' },
    cellphone_contactable: true,
    scholarity: { id: ''},
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: '',
    city: { name: '' },
    work_experience : { id: ''},
    referral_type: '',
    accepted_terms: '',
    exchange_reason: ''
  }

  cellphoneDefaultMask: string = '000 000 000';
  cellphoneMask : any;

  scholarityOptions: any = [];
  reasonOptions = [];

  preferredDestionationOptions: any = [
    { id: '4', name: 'Brazil' },
    { id: '5', name: 'Colombia' },
    { id: '6', name: 'Costa Rica' },
    { id: '7', name: 'Hungary' },
    { id: '8', name: 'India' },
    { id: '9', name: 'Mexico' },
    { id: '10', name: 'Panama' },
    { id: '11', name: 'Romania' },
  ];

  departments: any = [];

  citiesOptions: any = [];

  workExperienceOptions:any = [];

  referralTypes = []

  universities: any[];
  filteredScholarityOptions: Observable<any[]>;
  filteredDepartmentsOptions: Observable<any[]>;
  filteredCourses: Observable<any[]>;
  filteredPlaces: Observable<any[]>;
  filteredCitiesOptions: Observable<any[]>;
  filteredPreferredDestinationsOptions: Observable<any[]>;

  placeholderBirthdate: string;

  selectedItems: any = {
    language: false,
    marketing: false,
    information_technology: false,
    management: false
  };

  msgs: Message[] = [];

  personalData: boolean = true;
  studyData: boolean = false;

  invalidEmail: boolean = false;
  invalidPassword: boolean = false;
  invalidDate: boolean = false;
  invalidPhone: boolean = false;
  matchDate: boolean = true;
  loading: boolean = false;
  step1Form: FormGroup;
  step2Form: FormGroup;
  submittedPersonal: boolean = false;
  submittedStudy: boolean = false;
  completedSignup: boolean = false;
  modal: boolean = false;
  embeddedForm: boolean = false;

  courses: any;
  places: any;

  constructor(
    public signupService: SignupService,
    public translate: TranslateService,
    public router: Router,
    public urlScrapper: ActivatedRoute,
    private domainsService: DomainsService
  ) {
    this.workExperienceOptions = domainsService.getWorkExperienceDomainsGT();
    this.referralTypes = domainsService.getReferralTypes();
    this.reasonOptions = domainsService.getReasonsOptionsGT();
    this.scholarityOptions = domainsService.getScholarityDomains();
    this.departments = domainsService.getDepartments();
    this.step1Form = new FormGroup({
      fullname: new FormControl(this.user.fullname, [
        Validators.required
      ]),
      cellphone: new FormControl(this.user.cellphone, [
        Validators.required
      ]),
      email: new FormControl(this.user.email, [
        Validators.required
      ]),
      birthdate: new FormControl(this.user.birthdate, [
        Validators.required
      ]),
      cellphone_contactable: new FormControl(this.user.cellphone_contactable, []),
      accepted_terms: new FormControl(this.user.accepted_terms, []),
    });
    this.step2Form = new FormGroup({
      department: new FormControl(this.user.department, [
        Validators.required
      ]),
      university_id: new FormControl(this.user.university, [
        Validators.required
      ]),
      college_course_id: new FormControl(this.user.college_course, [
        Validators.required
      ]),
      scholarity: new FormControl(this.user.scholarity, [
        Validators.required
      ]),
      city: new FormControl(this.user.city, [
        Validators.required
      ]),
      work_experience: new FormControl(this.user.work_experience, [
        Validators.required
      ]),
      referral_type: new FormControl(this.user.referral_type, [
        Validators.required
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.pattern('^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z]).{8,}$')
      ]),
      repassword: new FormControl(this.user.repassword, [
        Validators.required,
        Validators.pattern('^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z]).{8,}$')
      ]),
      exchange_reason: new FormControl(this.user.exchange_reason, [
        Validators.required,
      ])
    });
    window.innerWidth > 600 ? this.placeholderBirthdate = "Los programas de AIESEC son para personas de 18 a 30 años - dd/mm/aaaa" : this.placeholderBirthdate = "Fecha de nacimiento";
  }

  ngOnInit() {

    if (this.formedUser) {
      this.user = this.formedUser;
      this.personalData = false;
      this.studyData = true;
    }

    this.urlScrapper.queryParams.subscribe((param: any) => {
      if (param['utm_source']) {
        localStorage.setItem('utm_source', param['utm_source'])
      }

      if (param['utm_medium']) {
        localStorage.setItem('utm_medium', param['utm_medium'])
      }

      if (param['utm_campaign']) {
        localStorage.setItem('utm_campaign', param['utm_campaign'])
      }

      if (param['utm_term']) {
        localStorage.setItem('utm_term', param['utm_term'])
      }

      if (param['utm_content']) {
        localStorage.setItem('utm_content', param['utm_content'])
      }

      if (param['embedded']) {
        this.embeddedForm = true;
      }
    });

    this.cellphoneMask = this.cellphoneDefaultMask;
    
    this.filteredScholarityOptions = this.scholarityOptions;
    this.filteredCitiesOptions = this.citiesOptions;
    this.filteredDepartmentsOptions = this.departments;

    this.filteredPreferredDestinationsOptions = this.preferredDestionationOptions;

    this.fillCourseSelect().then(() => {
      this.filteredCourses = this.step2Form.controls.college_course_id.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value, this.courses))
        );
    });    
  }

  private _filter(value: string, options: any): any[] {
    const filterValue = value.length ? value.toLowerCase() : value;
    return options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  onResize(event) {
    (event.target.innerWidth > 600 ? this.placeholderBirthdate = "Os programas da AIESEC são para pessoas de 18 à 30 anos" : this.placeholderBirthdate = "Fecha de nacimiento");
  }

  cancelSignUp() {
    if (this.formedUser) {
      this.onCancelEvent.emit();
    } else {
      if (this.submittedPersonal) {
        this.submittedPersonal = false;
        this.submittedStudy = false;
        this.personalData = true;
        this.studyData = false;
      } else {
        this.router.navigate(['/']);
      }
    }
  }

  filterCities(department){
    this.citiesOptions = this.domainsService.getCities(department);
    this.filteredCitiesOptions = of(this.citiesOptions);
    this.user.city = { name: '' };
  }

  filterUniversities(city) {
    if (city){
      this.fillUniversitySelect((this.user.scholarity.id && +this.user.scholarity.id <= 1) ? 'otras' : undefined);
    }
  }


  accessAiesec() {
    window.open("https://aiesec.org/", "_blank");
  }

  isValidPersonal(field) {
    return !this.step1Form.controls[field].valid && (this.step1Form.controls[field].dirty || this.submittedPersonal)
  }

  isValidStudy(field) {
    return !this.step2Form.controls[field].valid && (this.step2Form.controls[field].dirty || this.submittedStudy)
  }

  fillUniversitySelect(search?) {
    return this.signupService.getUniversities(search, {
      city : this.user.city.name,
      department : this.user.department.name,
      program : '2'
    }).then((res: any) => {
      this.universities = res;
    }, (err) => {
      this.msgs = [];
      this.msgs.push({ severity: 'error', summary: 'FALHA EM RECUPERAR DADOS!', detail: 'Não foi possível recuperar os dados das faculdades disponíveis.' });
    })
  }

  fillCourseSelect() {
    return this.signupService.getCourses().then((res: any) => {
      let orderedList = _.orderBy(res, ['name'], ['asc']);
      let other = _.remove(orderedList, item => item.name === 'Outro');
      this.courses = _.union(orderedList, other);
    }, (err) => {
      this.msgs = [];
      this.msgs.push({ severity: 'error', summary: 'FALHA EM RECUPERAR DADOS!', detail: 'Não foi possível recuperar os dados dos cursos disponíveis.' });
    })
  }

  fillPlacesSelect() {
    return this.signupService.getLocalCommittees().then((res: any) => {
      let orderedList = _.orderBy(res, ['name'], ['asc']);
      this.places = orderedList;
    }, (err) => {
      this.msgs = [];
      this.msgs.push({ severity: 'error', summary: 'FALHA EM RECUPERAR DADOS!', detail: 'Não foi possível recuperar os dados das AIESEC disponíveis.' });
    })
  }

  changeScholarity(scholarity_level) {
    this.user.university = { id: '', name: '', local_committee_id: '' };
    this.user.college_course = { id: '', name: '' };

    if (this.user.city) {
      this.fillUniversitySelect(scholarity_level && scholarity_level <= 1 ? 'otras' : undefined);
    } 
  }

  checkPassword() {
    if (this.user.password != this.user.repassword) {
      this.invalidPassword = true;
    }
    else {
      this.invalidPassword = false;
    }
  }

  unableToSubmit() {    
    return this.emptyFields() || this.emptyUniversity() || this.emptyCourse() || !+this.user.referral_type || this.isValidStudy('password') || this.invalidPassword || !this.user.exchange_reason.toString();
  }

  emptyFields() {
    return !(this.user.scholarity && !!this.user.scholarity.id) || !(!!this.user.password && !!this.user.repassword);
  }

  emptyUniversity() {
    if(this.user.scholarity.id && +this.user.scholarity.id <= 1){
      return false;
    }
    if (this.user.university && this.user.university.id) {
      return !this.user.university.id
    }
    else {
      return true;
    }
  }

  emptyCourse() {
    if (+this.user.scholarity.id > 1 && this.user.college_course.id) {
      return !this.user.college_course.id
    } 
    else if (+this.user.scholarity.id <= 1) {
      this.user.college_course = { id: '', name: '' };
      return false;
    }
    else {
      return true;
    }
  }

  checkDate() {
    let date = moment(this.user.birthdate, 'DDMMYYYY').format('DD/MM/YYYY').split('/');
    if ((+date[0] > 0 && +date[0] <= 31) && (+date[1] > 0 && +date[1] <= 12) && (+date[2] > 1900 && +date[2] < moment().year())) {
      this.invalidDate = false;
      let date = moment(this.user.birthdate, 'DD/MM/YYYY').format('YYYY-MM-DD');
      let age = moment().diff(date, 'years', false);
      (age >= 18 && age <= 30) ? this.matchDate = true : this.matchDate = false
    }
    else {
      this.invalidDate = true;
    }
  }

  openModal() {
    this.modal = true;
  }

  closeModal() {
    this.modal = false;
  }

  checkPhone() {
    let cellphone = this.user.cellphone.replace(/[(+)_-\s]/g, '');
    if (cellphone.length < 8) {
      this.invalidPhone = true;
      return;
    }
    else {
      this.invalidPhone = false;
    }
  }

  registerUser() {
    this.submittedPersonal = true;

    if (this.user.fullname && this.user.cellphone && this.user.email && this.user.birthdate && this.matchDate && this.user.accepted_terms && !this.invalidPhone) {
      this.personalData = false;
      this.studyData = true;
      this.signupService.registerUserToRD(this.user, 'expa_reg_form_gt');
    }
  }

  submit() {
    if(this.user.scholarity.id && +this.user.scholarity.id <= 1){
      this.user.university = this.universities[0];
    }
    this.submittedStudy = true;
    let user = {
      gt_participant: {
        fullname: this.user.fullname,
        cellphone: this.user.cellphone.replace(/[(+)_-\s]/g, ''),
        email: this.user.email,
        password: this.user.password,
        birthdate: moment(this.user.birthdate, 'DDMMYYYY').format('YYYY-MM-DD'),
        university_id: (this.user.university.id == '' ? null : +this.user.university.id),
        local_committee_id: (this.user.university ? +this.user.university.local_committee_id : null),
        college_course_id: (this.user.college_course.id == '' ? '' : +this.user.college_course.id),
        cellphone_contactable: (this.user.cellphone_contactable ? true : false),
        scholarity: +this.user.scholarity.id,
        utm_source: (localStorage.getItem('utm_source') ? localStorage.getItem('utm_source') : null),
        utm_medium: (localStorage.getItem('utm_medium') ? localStorage.getItem('utm_medium') : null),
        utm_campaign: (localStorage.getItem('utm_campaign') ? localStorage.getItem('utm_campaign') : null),
        utm_term: (localStorage.getItem('utm_term') ? localStorage.getItem('utm_term') : null),
        utm_content: (localStorage.getItem('utm_content') ? localStorage.getItem('utm_content') : null),
        referral_type: +this.user.referral_type,
        exchange_reason: this.user.exchange_reason,
        work_experience: (this.user.work_experience ? +this.user.work_experience : null)
      }
    };
    
    this.signupService.registerUserToRD(this.user, 'expa_reg_form_gt');
    this.loading = true;
    this.signupService.addGtParticipant(user)
      .then((res: any) => {
        this.loading = false;
        if (res.status == 'failure') {
          this.msgs = [];
          this.msgs.push({ severity: 'error', summary: 'FALHA AO SALVAR!', detail: 'Não foi possível salvar, tente novamente mais tarde.' });
        }
        else {
          this.completedSignup = true;
          localStorage.removeItem('utm_source');
          localStorage.removeItem('utm_medium');
          localStorage.removeItem('utm_campaign');
          localStorage.removeItem('utm_term');
          localStorage.removeItem('utm_content');
          this.router.navigate(['/talento-global/obrigado']);
        }
      },
        (err) => {
          this.msgs = [];
          this.msgs.push({ severity: 'error', summary: 'ERRO AO SALVAR!', detail: 'Não foi possível salvar, tente novamente mais tarde.' });
          this.loading = false;
        }
      )
  }

  checkEmail() {
    this.signupService.checkValidEmail(this.user.email)
      .then((res: any) => {
        res.email_exists ? this.invalidEmail = true : this.invalidEmail = false;
      }, (err) => {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'FALHA EM RECUPERAR DADOS!', detail: 'Não foi possível recuperar dados deste email.' });
      })
  }

  display(option) {
    return option ? option.name : undefined;
  }

  searchScholarity(event) {
    this.filteredScholarityOptions = this._search(this.scholarityOptions, event.query);
  };

  searchCities(event) {
    if (!event.originalEvent) {
      this.filteredCitiesOptions = this.citiesOptions;
    }
    this.filteredCitiesOptions = this._search(this.citiesOptions, event.query);
  }

  searchDepartments(event) {
    if (!event.originalEvent) {
      this.filteredDepartmentsOptions = this.departments;
    }
    this.filteredDepartmentsOptions = this._search(this.departments, event.query);
  }

  searchUnivesity(event) {
    if (!event.originalEvent) {
      this.universities = this.universities.slice(); //fixing autocomplete first load that wasn't showing the suggestions
      return;
    }
    this.fillUniversitySelect(event.query);
  };

  checkUniversityValue(event) {
    if (event.keyCode == 8 && !this.user.university) {
      this.fillUniversitySelect('');
    }
  }

  searchCourses(event) {
    this.filteredCourses = this._search(this.courses, event.query);
  };

  searchPlaces(event) {
    this.filteredPlaces = this._search(this.places, event.query);
  };

  checkCityValue() {
    if (this.user.city) {
      this.user.university = null;
    }
  }

  checkMaskCellphone(event) {
    if (+event.key >= 0 && +event.key <= 9 || event.key == "Backspace") {
      if (this.user.cellphone.length == 0){
        this.user.cellphone += '9';
      }
      this.cellphoneMask = this.cellphoneDefaultMask;
    }
  }

  searchPreferredDestinations(event) {
    this.filteredPreferredDestinationsOptions = this._search(this.preferredDestionationOptions, event.query);
  };

  _search(options, search) {
    return _.filter(options, (option) => {
      return option.name.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .indexOf(
          search.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, "")
        ) > -1;
    });
  };

  selectInput(element) {
    $('.form-group').css('z-index', '-1');
    $('.' + element).css('z-index', '10');
  }

  clearField(field) {
    this.user[field] = '';
    if (field == 'city') {
      this.user.university = { id: '', name: '', local_committee_id: '' };
      this.filteredCitiesOptions = this.citiesOptions;
    }
    else if (field == 'university') {
      this.fillUniversitySelect();
    }
  }
}
