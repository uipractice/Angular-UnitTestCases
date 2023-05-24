import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private router:Router){}
  homeNavigation() {
    // some logical code here :)
    this.router.navigate(['/home']);
    console.log('hello');
    
    }
}
