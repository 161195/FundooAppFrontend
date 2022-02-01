import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/service/noteService/note-service.service';
import {DataServiceService} from 'src/app/service/dataService/data-service.service';


@Component({
  selector: 'app-trash-notes',
  templateUrl: './trash-notes.component.html',
  styleUrls: ['./trash-notes.component.scss']
})
export class TrashNotesComponent implements OnInit {
  trashList:any;
  token:any;
  notesList:any;
  constructor(private user: NoteServiceService,private dataservice:DataServiceService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.dataservice.receivedData.subscribe((displayTrashedList:any)=>{
      console.log(displayTrashedList)
      this.getAllTrashedNotes();
    })
  }
  getAllTrashedNotes(){
    this.user.userGetAllNotes(this.token).subscribe((response:any)=>{
      this.trashList=response.userlist.filter((result:any)=>{
        this.notesList= result.isTrash === true
        return this.notesList
      })
      this.trashList.reverse()
    })
  }

}
