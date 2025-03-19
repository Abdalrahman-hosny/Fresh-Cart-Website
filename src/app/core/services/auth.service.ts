
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }

  userInfo : any ;

  baseUrl: string = `https://ecommerce.routemisr.com/api/v1/auth/`;

register(UserData:object):Observable <any> {
  return this._HttpClient.post( this.baseUrl +`signup` , UserData)
}

login(UserData:object):Observable <any> {
  return this._HttpClient.post( this.baseUrl +`signin` , UserData)
}


decodeUaser():void{
 const encode = localStorage.getItem('etoken')

 if(encode !== null){

  const decode =jwtDecode(encode)
  this.userInfo = decode

  

 }
}


}
