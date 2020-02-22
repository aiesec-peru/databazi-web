import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-landing-page-gt',
  templateUrl: './landing-page-gt.component.html',
  styleUrls: ['./landing-page-gt.component.scss']
})
export class LandingPageGtComponent implements OnInit {

  gtTextContent : string  = '';

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
    let url = this.router.url.replace('/',''),
    text = '';

    text=null;
    
    if (url == 'talento-global-oportunidades' || url=='talento-global-profesional' || url=='talento-global-networking'){
      switch (url){
        case 'talento-global-oportunidades':
         text='Ser un Talento global es una experiencia internacional en empresas durante 3 a 12 meses donde los jóvenes tienen la oportunidad de vivir el ambiente profesional y corporativo. Las grandes áreas de trabajo de Talento Global son: Tecnología e Información, Administración, Finanzas, Gestión, Recursos Humanos, Marketing y Enseñanza de idiomas. Para el proceso son necesarios algunos requisitos como inglés avanzado y experiencia en el área en la que te interesa trabajar. En esta experiencia, el intercambista recibe un soporte económico para cubrir los costos básicos durante el período de intercambio.';
        break;
        case 'talento-global-profesional':
         text='Ser un Talento global es una experiencia internacional en empresas durante 3 a 12 meses donde los jóvenes tienen la oportunidad de vivir el ambiente profesional y corporativo. Las grandes áreas de trabajo de Talento Global son: Tecnología e Información, Administración, Finanzas, Gestión, Recursos Humanos, Marketing y Enseñanza de idiomas. Para el proceso son necesarios algunos requisitos como inglés avanzado y experiencia en el área en la que te interesa trabajar. En esta experiencia, el intercambista recibe un soporte económico para cubrir los costos básicos durante el período de intercambio.';
        break;
        case 'talento-global-networking':
          text='Ser un Talento Global es una experiencia internacional para jóvenes que desean obtener experiencia profesional y además quieran salir de su zona de confort conociendo otras realidades y/o culturas en un país diferente al nuestro. Con esta experiencia de Talento Global trabajarás junto a más pasantes internacionales que tienen el mismo objetivo que tú, viajar y ganar experiencia profesional. Las grandes áreas de trabajo de Talento Global son: Tecnología e Información, Administración, Finanzas, Gestión, Recursos Humanos, Marketing y Enseñanza de idiomas. Los requisitos para ser un talento global es poder estar fuera del país entre 3 a 12 meses, tener inglés avanzado y experiencia en el área en la que te interesa trabajar. En esta experiencia, el pasante recibe un soporte económico para cubrir los costos básicos durante el período de intercambio.';
        break;
      }
      this.gtTextContent = text;
    }
  }

}
