import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  window: any = window;
  router: Router;

  constructor(
    public activate: ActivatedRoute,
    private titleService: Title
  ) {

  }
  changeOfRoutes() {
    this.activate.queryParams.subscribe((param: any) => {
      if (!param['embedded']) {
        this.window.fbq('init', '1214565305375863');
        this.window.fbq('track', 'PageView');
      }
    });
    this.changeTitle();
  }

  changeTitle() {
    let url = location.pathname.replace('/', ''),
      title = '';
    switch (url) {
      case 'voluntario-para-explorar':
        title = 'Explora, con Voluntario Global';
        break;
      case 'voluntario-para-crecer':
        title = 'Desarróllate, con Voluntario Global';
        break;
      case 'voluntario-para-impactar':
        title = 'Impacta, con Voluntario Global';
        break;
      case 'emprendedor-para-crecer':
        title = 'Crece, con Emprendedor Global';
        break;
      case 'emprendedor-para-aprender':
        title = 'Aprender, con Emprendedor Global';
        break;
      case 'emprendedor-para-explorar':
        title = 'Explora, con Emprendedor Global';
        break;
      case 'emprendedor-para-conocer':
        title = 'Internacionalízate, con Emprendedor Global';
        break;
      case 'talento-global-oportunidades':
        title = 'Obtén Oportunidades, con Talento Global';
        break;
      case 'talento-global-profesional':
        title = 'Crece profesionalmente, con Talento Global';
        break;
      case 'talento-global-networking':
        title = 'Amplia tu red, con Talento Global';
        break;
      default:
        title = 'AIESEC en Peru - Liderazgo a través de intercambio'
        break;
    }
    this.titleService.setTitle(title);
  }
}
