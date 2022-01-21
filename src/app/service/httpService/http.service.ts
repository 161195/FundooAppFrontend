import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl='https://localhost:44317/api'

  constructor(private http:HttpClient) { }
  // postService(url:any,data:any,token:boolean=false,httpOptions:any){
  //   return this.http.post(this.baseUrl+url,data,token && httpOptions)
  // }

  postService(url:any,data:any,token:boolean=true,httpOptions:any){
    return this.http.post(this.baseUrl+url,data,token && httpOptions)
  }

}
