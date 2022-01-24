import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/userService/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm!: FormGroup;
  submitted = true;
  token:any;

  constructor(private formBuilder: FormBuilder,private user: UserService,private ActivatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', [Validators.required, Validators.minLength(6)]],
  });
  this.token=this.ActivatedRouter.snapshot.paramMap.get('token');
  }
  onSubmit() { 
    this.submitted=true;
    if(this.resetPasswordForm.valid)
    {
      console.log(this.resetPasswordForm.value,this.token);
      let resetPassword={
      newPassWord:this.resetPasswordForm.value.password,
      confirmPassword:this.resetPasswordForm.value.ConfirmPassword,       
     }
     this.user.userResetPassword(resetPassword).subscribe((response:any)=>{
       console.log("any msggg",response)
     })
    }
    else
    {
      console.log("invalid");
    }
  }
}
