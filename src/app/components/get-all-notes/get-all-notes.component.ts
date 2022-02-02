import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/service/noteService/note-service.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  token:any;
  notelist:any;
  myNoteList:any;
  constructor(private user: NoteServiceService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.getAllNotes();
  }
  
  getAllNotes() { 
    this.user.userGetAllNotes(this.token).subscribe((response:any)=>{
      this.notelist=response.userlist.filter((result:any)=>{
        this.myNoteList= result.isTrash === false && result.isArchive === false
        return this.myNoteList
      })
      this.notelist.reverse()
    })
    } 

 }
  


