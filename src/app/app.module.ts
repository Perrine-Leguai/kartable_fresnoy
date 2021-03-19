import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import{FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//components
import { AppComponent } from './app.component';
import { ResearchComponent } from './research/research.component';
import { ConnectionComponent } from './connection/connection.component';
import { DisplayedInfoComponent } from './displayed-info/displayed-info.component';

//services
import { ProductionService } from './_service/production.service';
import { JwtInterceptor } from './_jwtInterceptor/jwtInterceptor.interceptor';
import { PageNotFoundComponent } from './_errorPage/page-not-found/page-not-found.component';
import { StopPropagationDirective } from './_directive/stop-propagation.directive';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    ResearchComponent,
    DisplayedInfoComponent,
    PageNotFoundComponent,
    StopPropagationDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,

  ],
  exports:[RouterModule],
  providers: [
    ProductionService,
    { provide: HTTP_INTERCEPTORS, useClass : JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
