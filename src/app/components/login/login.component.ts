import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService , private _Router:Router){}

  isLoading:boolean = false

  errMsg:string = '';

loginForm :FormGroup =new FormGroup ({
  
  email:new FormControl ('' , [Validators.required , Validators.email]),
  password: new FormControl ('' , [Validators.required , Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)]),
  
});





handleForm():void{
  const userDate = this.loginForm.value ;

  this.isLoading = true

  if(this.loginForm.valid === true){

    this._AuthService.login(userDate).subscribe({
      next:(response)=>{
       if(response.message === "success"){

        localStorage.setItem('etoken' , response.token)

        this._AuthService.decodeUaser();

        this.isLoading = false
        this._Router.navigate(['/home'])

       }
      }, 
      error:(err)=>{
        this.errMsg = err.error.message

        this.isLoading = false
      },
    })
  }

}


}


