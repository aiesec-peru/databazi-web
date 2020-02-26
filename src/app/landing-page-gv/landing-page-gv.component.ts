import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-landing-page-gv',
  templateUrl: './landing-page-gv.component.html',
  styleUrls: ['./landing-page-gv.component.scss']
})
export class LandingPageGvComponent implements OnInit {

  gvTextContent : string  = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.changeTextContent();   
  }

  scrollToForm(){
    var scrollTop = 0;
    if (window.innerWidth >= 1024){
      scrollTop = 1300;
    }else{
      scrollTop = -scrollTop;
      scrollTop -= 200;
    }
    $('html, body').animate({
      scrollTop: scrollTop
    }, 700);
  }

  changeTextContent(){
    let url = this.router.url.replace('/',''),
    text = '';

    text=null;
    
    if (url == 'voluntario-para-crecer' || url=='voluntario-para-explorar' || url=='voluntario-para-impactar'){
      switch (url){
        case 'voluntario-para-crecer':
          text='Ser un Voluntario Global es una experiencia intercultural para jóvenes que desean obtener desarrollo profesional y personal mientras realizan una labor social.  Con esta experiencia voluntaria podrás aplicar lo aprendido de la universidad en un proyecto social, además podrás practicar otros idiomas y desarrollar tus habilidades interpersonales mientras trabajas en equipo junto a más voluntarios internacionales. Los proyectos sociales tienen una duración de 6 a 8 semanas y el único requisito es tener entre 18 y 30 años para  ser un voluntario internacional.';
        break;
        case 'voluntario-para-explorar':
          text='Ser un Voluntario Global es una experiencia internacional para jóvenes que desean salir de su zona de confort conociendo otras realidades y/o culturas en un país diferente al nuestro mientras realizan una labor social. Con esta experiencia voluntaria trabajarás junto a más voluntarios internacionales que tienen el mismo objetivo que tú, viajar e impactar el mundo. Los requisitos para ser un voluntario internacional es poder viajar entre 6 a 8 semanas y tener entre 18 a 30 años.';
        break;
        case 'voluntario-para-impactar':
          text='Ser un Voluntario Global es una experiencia intercultural para jóvenes que desean obtener un desarrollo personal y dejar un impacto positivo en el mundo. Con esta experiencia voluntaria realizarás proyectos sociales en ONGs, Escuelas o Fundaciones en diversos países del mundo, todos los proyectos están vinculados con los Objetivos de Desarrollo Sostenible propuestas por la ONU. Los proyectos tienen una duración de 6 a 8 semanas y el único requisito es tener entre 18 y 30 años para dejar tu huella en el mundo.';
        break;
      }
      this.gvTextContent = text;
    }
  }

}
