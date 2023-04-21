import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-sdashboard',
  templateUrl: './sdashboard.component.html',
  styleUrls: ['./sdashboard.component.css']
})
export class SdashboardComponent {
  studentid: any;
  sname: any;
  psw: any;
userarray:any
constructor(private router:Router,private fb:FormBuilder , private ds:DataService){}

sregisterForm=this.fb.group({
  studentid: ['',[Validators.required,Validators.pattern('[0-9]+')]],
  date: ['',[Validators.required]] ,
  reason:['',[Validators.required,Validators.pattern('[0-9a-z]+')]],
  depname:['',[Validators.required,Validators.pattern('[0-9a-z]+')]]
})
sregister() {
  var studentid = this.sregisterForm.value.studentid
  var date= this.sregisterForm.value.date
  var reason = this.sregisterForm.value.reason
  var depname=this.sregisterForm.value.depname
 if(this.sregisterForm.valid){
    this.ds.sregister(studentid,date,reason,depname).subscribe((result:any)=>{
    localStorage.setItem("currentAdmin",result.currentAdmin)
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


