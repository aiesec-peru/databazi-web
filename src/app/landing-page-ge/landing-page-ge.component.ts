import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-page-ge',
  templateUrl: './landing-page-ge.component.html',
  styleUrls: ['./landing-page-ge.component.scss']
})
export class LandingPageGeComponent implements OnInit {
  
  geTextContent : string  = '';

  constructor(
      private router: Router
  ) { }  

ngOnInit() {
    this.changeTextContent();
  }

  scrollToForm(){
    $("input[name='fullname']").trigger('click'); //o efeito do scroll não estava funcionando bem, vamos deixar isso aqui por enquanto.
  }

  changeTextContent(){
      console.log('test');
    let url = this.router.url.replace('/',''),
        text = '';
    
    if (url == 'emprendedor-para-crecer' || url=='emprendedor-para-explorar' || url=='emprendedor-para-conocer'){
      console.log('test - console');
      switch (url){
        case 'emprendedor-para-crecer':
         text='Ser Emprendedor Global es una experiencia de pasantía internacional donde jóvenes (pre-grado y graduados) podrán desarrollar su carrera profesional trabajando en una Startup durante 8 a 12 semanas. Las áreas de acción son Marketing, Administración, Tecnología e Información, Diseño Gráfico y Desarrollo de Negocios. Es de preferencia que el joven tenga inglés intermedio y alguna experiencia profesional previa o académica en el área de ocupación de preferencia';
        break;
        case 'emprendedor-para-explorar':
          text='Ser un Emprendedor Global es una experiencia internacional para jóvenes que desean obtener experiencia profesional y además quieran salir de su zona de confort conociendo otras realidades y/o culturas en un país diferente al nuestro. Con esta experiencia de Emprendedor Global trabajarás junto a más pasantes internacionales que tienen el mismo objetivo que tú, viajar y ganar experiencia profesional. Los requisitos para ser un emprendedor global es poder estar fuera del país entre 8 a 12 semanas y tener entre 18 a 30 años, es de preferencia que el joven tenga inglés intermedio y alguna experiencia profesional previa o académica en el área de ocupación de preferencia';
        break;
        case 'emprendedor-para-conocer':
          text='Ser un Emprendedor Global es una experiencia internacional para jóvenes que desean obtener experiencia profesional y además quieran salir de su zona de confort conociendo otras realidades y/o culturas en un país diferente al nuestro. Con esta experiencia de Emprendedor Global trabajarás junto a más pasantes internacionales que tienen el mismo objetivo que tú, viajar y ganar experiencia profesional. Los requisitos para ser un emprendedor global es poder estar fuera del país entre 8 a 12 semanas y tener entre 18 a 30 años, es de preferencia que el joven tenga inglés intermedio y alguna experiencia profesional previa o académica en el área de ocupación de preferencia';
        break;
      }
      this.geTextContent = text;
    }
    else {
        console.log('test - else');
    }
  }

}