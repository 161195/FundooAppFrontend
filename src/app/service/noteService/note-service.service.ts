import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
 token:any;
  constructor(private httpService:HttpService) { 
  }

  userCreateNotes(data:any,token:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        Authorization:'Bearer '+ token
      })
    }
    return this.httpService.postService('/Note',data,true,header)
  }
}