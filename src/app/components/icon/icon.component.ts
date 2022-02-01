import { Component,Input, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/service/noteService/note-service.service';
import {DataServiceService} from 'src/app/service/dataService/data-service.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() CardObject: any;
  token:any;
  constructor(private user: NoteServiceService,private dataservice:DataServiceService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
  }

  deleteNote(){
    let data = {
      id: [this.CardObject.noteId],
      isTrash: false,
    }  
    this.user.userTrashNotes(data,this.token).subscribe((response:any)=>{
      console.log("Note has been deleted")
      console.log(response)
      this.dataservice.sendData(response)
    })
    // window.location.reload();
  }

}
