import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-section6Component
import { section6Component } from '../components/section6.component';
//CORE_REFERENCE_IMPORT-section5Component
import { section5Component } from '../components/section5.component';
//CORE_REFERENCE_IMPORT-sction4Component
import { sction4Component } from '../components/sction4.component';
//CORE_REFERENCE_IMPORT-setion3Component
import { setion3Component } from '../components/setion3.component';
//CORE_REFERENCE_IMPORT-section2Component
import { section2Component } from '../components/section2.component';
//CORE_REFERENCE_IMPORT-section1belowComponent
import { section1belowComponent } from '../components/section1below.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/home.component';
//CORE_REFERENCE_IMPORT-Section1Component
import { Section1Component } from '../components/Section1.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-section6Component
  section6Component,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-section5Component
  section5Component,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-sction4Component
  sction4Component,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-setion3Component
  setion3Component,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-section2Component
  section2Component,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-section1belowComponent
  section1belowComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
  homeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-Section1Component
  Section1Component,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  { path: 'home', component: homeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
