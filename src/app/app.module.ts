import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import { VoterComponent } from './property-and-event-binding-test-case/voter.component';

import { routes } from './app.routes';
import { HighlightDirective } from './directiveTestCase/highlight.directive';
import { LoginComponent } from './reactiveFormTestCase/login/login.component';
import { SearchComponent } from './routingTestcase/search/search.component';
import { HomeComponent } from './routingTestcase/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    HighlightDirective,
    LoginComponent,
    SearchComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
