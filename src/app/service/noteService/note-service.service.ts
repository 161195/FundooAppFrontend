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
    return this.httpService.postService('/Note',data,true,header);
  }
  userGetAllNotes(token:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        Authorization:'Bearer '+ token
      })
    }
    return this.httpService.getService('/Note',true,header);

  }
  userUpdateNotes(data:any,token:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        Authorization:'Bearer '+ token
      })
    }
    return this.httpService.putService('/Note/'+data.id ,data,true,header);
  }
  // userDeleteNotes(data:any,token:any){
  //   let header={
  //     headers:new HttpHeaders({
  //       'Content-Type': 'application/json-patch+json',
  //       Authorization:'Bearer '+ token
  //     })
  //   }
  //   return this.httpService.deleteService('/Note/'+data.id+'/Delete',data,header);
  // }
  userTrashNotes(data:any,token:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        Authorization:'Bearer '+ token
      })
    }
    return this.httpService.putService('/Note/'+data.id+'/Trash',true,data,header);
  }
  userArchiveNotes(data:any,token:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        Authorization:'Bearer '+ token
      })
    }
    return this.httpService.putService('/Note/'+data.id+'/Archive',true,data,header);
  }


}
