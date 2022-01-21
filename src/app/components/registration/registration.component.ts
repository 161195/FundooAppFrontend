import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/userService/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  submitted = true;

  constructor(private formBuilder: FormBuilder,private user: UserService) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required], 
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', [Validators.required, Validators.minLength(6)]],
   
  });
  }
 onSubmit() { 
   this.submitted=true;
   if(this.registrationForm.valid)
   {
     console.log(this.registrationForm.value);
     let register={
      firstName:this.registrationForm.value.firstName,
      lastName:this.registrationForm.value.lastName,
      emailId:this.registrationForm.value.email,
      password:this.registrationForm.value.password,
     
    }
    this.user.userRegister(register).subscribe((response:any)=>{
      console.log(response)
    })
   }
   else
   {
     console.log("invalid");
   }
 }

} 
