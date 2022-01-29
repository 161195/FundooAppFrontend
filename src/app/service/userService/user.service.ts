import { HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private httpService:HttpService) { }
  userRegister(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json'
      })
    }
    return this.httpService.postService('/User',data,false,header)
  }
  userLogin(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json'
      })
    }
    return this.httpService.postService('/User/Login',data,true,header)
  }
  userforgetPassword(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json'
      })
    }
    return this.httpService.postService('/User/forgetPassword',data,false,header)
  }
  userResetPassword(data:any,token:any){
  let header={
    headers:new HttpHeaders({
      'Content-Type': 'application/json-patch+json',
      Authorization :'Bearer '+ token
    })
  }
  return this.httpService.putService('/User/ResetPassword',data,true,header)
}
}
