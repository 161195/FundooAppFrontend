import { Component, Input, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/service/noteService/note-service.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
@Input() notesArraylist:any;

  constructor(private user: NoteServiceService) { }

  ngOnInit(): void {
    
  }
 
}
