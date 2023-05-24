import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() { 
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)]],
    });
  }
  login(){
   if(this.loginForm.valid){
    console.log(`Login ${this.loginForm.value}`);
    
   }
  
    
  
  }

    
   


}


