import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router, private ds:DataService, private fb:FormBuilder){

  }
  id:any;
  pswd:any;

  loginForm=this.fb.group({
    id:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  login(){
    var id = this.id;
    var pswd = this.pswd;
    var userDetails = this.ds.userDetails;
     const result=this.ds.login(id,pswd)
    if(result){
      alert('Login successful')
      this.router.navigateByUrl('dashboard')
    }else{
      alert('Login failure')
      console.log(this.loginForm.get('id')?.errors);
      
    }
  }
  
    
    

}
