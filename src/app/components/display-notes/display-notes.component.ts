import { Component, Input, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/service/noteService/note-service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';


@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
@Input() notesArraylist:any;
title : any;
message : any;

  constructor(private user: NoteServiceService,public dialog: MatDialog) { }

  openDialog(noteObjet:any): void {
    const dialogRef = this.dialog.open(UpdateNotesComponent, {
      width: '650px',
      data: noteObjet,
    });

    dialogRef.afterClosed().subscribe(result => {
    //  console.log('The dialog was closed');
      this.title = result;
      this.message = result;
    });
  }

  messageRecievedFromNote(e:any){
    console.log(e);
  }
  ngOnInit(): void{

  }
 
}
