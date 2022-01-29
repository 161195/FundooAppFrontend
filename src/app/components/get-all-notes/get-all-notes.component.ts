import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/service/noteService/note-service.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  token:any;
  submitted =true; 

  constructor(private user: NoteServiceService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
  }
  
  onSubmit() { 
    this.submitted=true;
     
       this.user.userGetAllNotes(this.token).subscribe((response:any)=>{
         console.log(response)
       })
      }
      
 }
  


