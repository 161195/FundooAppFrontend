import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/userService/user.service';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {
  createNotesForm!: FormGroup;
  submitted = true; 
  card: boolean = false;

  constructor(private formBuilder: FormBuilder,private user: UserService ) {}

  ngOnInit(): void {
    this.createNotesForm = this.formBuilder.group({
      Title: [null, Validators.required],
  });
 }
 cardSwap() {
  console.log(this.card);
  return this.card === true ? (this.card = false) : (this.card = true);
}
  onSubmit() { 
  this.submitted=true;
    if(this.createNotesForm.valid)
    {
      console.log(this.createNotesForm.value);
      let CreateNote={
       Title:this.createNotesForm.value.title,
       message:this.createNotesForm.value.TakeNote  
    }
    //  this.user.userCreateNotes(CreateNote).subscribe((response:any)=>{
    //    console.log(response)
    //  })
    }
    else
    {
      console.log("invalid");
    }
  }
}
