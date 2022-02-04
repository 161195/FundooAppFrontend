import { Component, EventEmitter, OnInit,Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteServiceService } from 'src/app/service/noteService/note-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {
  createNotesForm!: FormGroup;
  submitted = true; 
  card: boolean = false;
  token:any;
  @Output() autorefreshEvent = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder,private user: NoteServiceService,private snackbar:MatSnackBar ) {}

  ngOnInit(): void {
    this.createNotesForm = this.formBuilder.group({
      title: [null, Validators.required],
      TakeNote: [null, Validators.required],
  });
  this.token=localStorage.getItem('token');
 }
 cardSwap() {
  console.log(this.card);
   return this.card === true ? (this.card = false) : (this.card = true); //condition operator
}
  onSubmit() { 
  this.submitted=true;
    if(this.createNotesForm.valid)
    {
      console.log(this.createNotesForm.value);
      let CreateNote={
       title:this.createNotesForm.value.title,
       message:this.createNotesForm.value.TakeNote,  
    }
     this.user.userCreateNotes(CreateNote,this.token).subscribe((response:any)=>{
       console.log(response)
       this.autorefreshEvent.emit(response);
       this.snackbar.open('Note created Successfully !','',{
        duration: 2000,
      });

     })
    }
    else
    {
      console.log("invalid");
    }
  }
}
