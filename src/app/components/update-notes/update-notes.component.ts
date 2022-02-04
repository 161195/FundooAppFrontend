import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteServiceService } from 'src/app/service/noteService/note-service.service';

@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.scss']
})
export class UpdateNotesComponent implements OnInit {
 title:any;
message:any;
token:any;

  constructor(private user: NoteServiceService,public dialogRef: MatDialogRef<UpdateNotesComponent>, 
    @Inject(MAT_DIALOG_DATA) public userlist: any) { }
 
  ngOnInit(): void {
    console.log('data from dialog',this.userlist)
    this.token=localStorage.getItem('token');
    this.title=this.userlist.title
    this.message=this.userlist.message
  }
  Update() {
    let data = {
      id: this.userlist.noteId,
      title: this.title,
      message: this.message,
    }

    this.user.userUpdateNotes(data,this.token).subscribe((response:any)=>{
      console.log("Note is updated")
      console.log(response)
      
    })
    // window.location.reload();
    this.dialogRef.close();
  }

}
