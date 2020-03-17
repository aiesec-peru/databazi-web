import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const router : Routes = [
    { path: '', component: LandingPageComponent },
    {
        path: 'voluntario-global',
        loadChildren: './landing-page-gv/landing-page-gv.module#LandingPageGvModule'
    },
    {
        path: 'voluntario-para-crecer',
        loadChildren: './landing-page-gv/landing-page-gv.module#LandingPageGvModule'
    },
    {
        path: 'voluntario-para-explorar',
        loadChildren: './landing-page-gv/landing-page-gv.module#LandingPageGvModule'
    },
    {
        path: 'voluntario-para-impactar',
        loadChildren: './landing-page-gv/landing-page-gv.module#LandingPageGvModule'
    },
    {
        path: 'talento-global',
        loadChildren: './landing-page-gt/landing-page-gt.module#LandingPageGtModule'
    },
    {
        path: 'talento-global-oportunidades',
        loadChildren: './landing-page-gt/landing-page-gt.module#LandingPageGtModule'
    },
    {
        path: 'talento-global-profesional',
        loadChildren: './landing-page-gt/landing-page-gt.module#LandingPageGtModule'
    },
    {
        path: 'talento-global-networking',
        loadChildren: './landing-page-gt/landing-page-gt.module#LandingPageGtModule'
    },
    {
        path: 'emprendedor-global',
        loadChildren: './landing-page-ge/landing-page-ge.module#LandingPageGeModule'
    },
    {
        path: 'emprendedor-para-crecer',
        loadChildren: './landing-page-ge/landing-page-ge.module#LandingPageGeModule'
    },
    {
        path: 'emprendedor-para-explorar',
        loadChildren: './landing-page-ge/landing-page-ge.module#LandingPageGeModule'
    },
    {
        path: 'emprendedor-para-aprender',
        loadChildren: './landing-page-ge/landing-page-ge.module#LandingPageGeModule'
    },
    {
        path: 'emprendedor-para-conocer',
        loadChildren: './landing-page-ge/landing-page-ge.module#LandingPageGeModule'
    },
    {
        path: 'intercambio',
        loadChildren: './form-offline/form-offline.module#FormOfflineModule'
    },
    {
        path: 'intercambio-gv',
        loadChildren: './form-gv/form-gv.module#FormGvModule'
    },
    {
        path: 'intercambio-gt',
        loadChildren: './form-gt/form-gt.module#FormGtModule'
    },
    {
        path: 'intercambio-ge',
        loadChildren: './form-ge/form-ge.module#FormGeModule'
    },
    {
        path: 'jovens/voluntario-global',
        loadChildren: './landing-page-gv/landing-page-gv.module#LandingPageGvModule'
    },
    {
        path: 'jovens/talentos-globais',
        loadChildren: './landing-page-gt/landing-page-gt.module#LandingPageGtModule'
    },
    {
        path: 'jovens/emprendedor-global',
        loadChildren: './landing-page-ge/landing-page-ge.module#LandingPageGeModule'
    },
    {
        path: 'familia',
        component: LandingPageComponent,
        resolve: {
            url: 'externalUrlRedirectResolver'
        },
        data: {
            externalUrl: 'https://blog.aiesec.pe/familia/'
        }
    },
    {
        path: 'familia-gracias',
        component: LandingPageComponent,
        resolve: {
            url: 'externalUrlRedirectResolver'
        },
        data: {
            externalUrl: 'https://blog.aiesec.pe/familia-gracias/'
        }
    },
    { path: '**', component: LandingPageComponent }
]

export const routes : ModuleWithProviders = RouterModule.forRoot(router, { useHash : false });
