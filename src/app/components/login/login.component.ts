import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = true;

  constructor(private formBuilder: FormBuilder,private user: UserService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
  });
  }
  onSubmit() { 
    this.submitted=true;
    if(this.loginForm.valid)
    {
      console.log(this.loginForm.value);
      let login={
       emailId:this.loginForm.value.email,
       password:this.loginForm.value.password,
      
     }
     this.user.userLogin(login).subscribe((response:any)=>{
      localStorage.setItem('token',response.result.jwtToken)
       console.log(response)
     
     })
    }
    else
    {
      console.log("invalid");
    }
  }
}
