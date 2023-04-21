import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  studentid: any;
  sname: any;
  psw: any;

constructor(private router:Router,private fb:FormBuilder , private ds:DataService){}

registerForm=this.fb.group({
  studentid: ['',[Validators.required,Validators.pattern('[0-9]+')]],
  sname: ['',[Validators.required,Validators.pattern('[0-9a-z]+')]] ,
  psw:['',[Validators.required,Validators.pattern('[0-9a-z]+')]]
})
register() {
  var studentid = this.registerForm.value.studentid
  var sname= this.registerForm.value.sname
  var psw = this.registerForm.value.psw 
 if(this.registerForm.valid){
    this.ds.register(studentid,sname,psw).subscribe((result:any)=>{
 
 alert(result.message)
 this.router.navigateByUrl("")
 
    },
    result=>{
     alert(result.error.message)
    }
     
     )
   // if(result){
   //  alert('registered')
   //  this.router.navigateByUrl("")
    
   // }
   // else{
   //  alert('user already presnt')
   // }
   
  
 
 }
 
 else{
   alert('invalid form')
 }
 
 
 
 
 
   }
 }


