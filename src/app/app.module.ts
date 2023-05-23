import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './2-todos/todos.component';
import { VoterComponent } from './property-and-event-binding-test-case/voter.component';

import { routes } from './app.routes';
import { UsersComponent } from './users/users.component';
import { HighlightDirective } from './highlight.directive';
import { GreeterComponent } from './greeter/greeter.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodosComponent,
    VoterComponent,
    UsersComponent,
    HighlightDirective,
    GreeterComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
