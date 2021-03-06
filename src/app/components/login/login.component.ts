import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup(
    {
      userName: new FormControl('',[Validators.required]),
      password:new FormControl('',Validators.required)
    }
  )
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    localStorage.setItem("token", "value")
    if(this.loginForm.valid){
      this.router.navigate(['/dashboard']);
    }
  }
}
