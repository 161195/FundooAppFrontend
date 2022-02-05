import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/service/noteService/note-service.service';
import {DataServiceService} from 'src/app/service/dataService/data-service.service';

@Component({
  selector: 'app-archive-notes',
  templateUrl: './archive-notes.component.html',
  styleUrls: ['./archive-notes.component.scss']
})
export class ArchiveNotesComponent implements OnInit {
  archiveList:any;
  token:any;
  notesList:any;
  constructor(private user: NoteServiceService,private dataservice:DataServiceService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.dataservice.receivedData.subscribe((displayArchiveList:any)=>{
      console.log(displayArchiveList)
      this.getAllArchiveNotes();
    })
  }
  getAllArchiveNotes(){
    this.user.userGetAllNotes(this.token).subscribe((response:any)=>{
      this.archiveList=response.userlist.filter((result:any)=>
      {
        this.notesList= result.isArchive === true
        return this.notesList
      })
      this.archiveList.reverse()
    })
  }
}
