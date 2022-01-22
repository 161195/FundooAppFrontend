import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/userService/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPasswordForm!: FormGroup;
  submitted = true;

  constructor(private formBuilder: FormBuilder,private user: UserService) { }

  ngOnInit(): void {
    this.forgetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
  });
  }
  onSubmit() { 
    this.submitted=true;
    if(this.forgetPasswordForm.valid)
    {
      console.log(this.forgetPasswordForm.value);
      let forgetPassword={
       emailId:this.forgetPasswordForm.value.email,    
     }
     this.user.userforgetPassword(forgetPassword).subscribe((response:any)=>{
       console.log(response)
     })
    }
    else
    {
      console.log("invalid");
    }
  }
}
