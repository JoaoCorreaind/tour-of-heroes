import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoadingComponent } from './components/loading/loading.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

const COMPONENTS = [
  MessagesComponent,
  ToolbarComponent,
  PageNotFoundComponent,
  LoadingComponent,
  ConfirmationDialogComponent,
];
const MODULES = [
  MaterialModule,
  FlexLayoutModule,
  RouterModule,
];
@NgModule({
  declarations: [
    COMPONENTS,
  ],
  imports: [
    CommonModule,
    MODULES
  ],
  exports: [
    COMPONENTS,
    MODULES,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule has already been loaded, import this module in the AppModule.'
      );
    }
  }
}
