import { Component,Input, OnInit,EventEmitter,Output  } from '@angular/core';
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

  @Output() changeColorOfNote = new EventEmitter<any>();

  colors = [
    {
      name: 'secondary-color-dark', bgColorValue: '#9933CC'
    },
    {
      name: 'pink lighten-1', bgColorValue: '#ec407a'
    },
    {
      name: 'Yellow', bgColorValue: '#FFFEA9'
    },
    {
      name: 'Light Green', bgColorValue: '#E4E978'
    },
    {
      name: 'Teal', bgColorValue: '#CDF0EA'
    }
  ];

  colors1 = [
    {
      name: 'Red', bgColorValue: '#F28B82'
    },
    {
      name: 'Orange', bgColorValue: '#FBBC05'
    },
    {
      name: 'Dark Blue', bgColorValue: '#AECBFA'
    },
    {
      name: 'Pink', bgColorValue: '#FDCFE8'
    },
    {
      name: 'Gray', bgColorValue: '#E8EAED'
    }
  ];


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
  archiveNote(){
    let data = {
      id: [this.CardObject.noteId],
      isArchive: false,
    } 
    this.user.userArchiveNotes(data,this.token).subscribe((response:any)=>{
      console.log("Note has been archived")
      console.log(response)
      this.dataservice.sendData(response)
    })
    // window.location.reload();
  }

  changeColor(noteColor:any){

    let data = {
      NoteId: [this.CardObject.noteId],
      color: noteColor
    }
    this.user.userChangeColorNotes(data,this.token).subscribe((response:any)=>{
      console.log(response)
      this.changeColorOfNote.emit(noteColor)
    })
    window.location.reload();
 
  }

}
