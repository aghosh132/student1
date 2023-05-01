import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb:FormBuilder,private router:Router, private ds:DataService){}


  sloginForm=this.fb.group({
    studentid: ['',[Validators.required,Validators.pattern('[0-9]+')]],
    
    psw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]
    
  })
  aloginForm=this.fb.group({
    adminid: ['',[Validators.required,Validators.pattern('[0-9a-z]+')]],
    
    apsw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]
    
    
  })
  login(){
    var studentid=this.sloginForm.value.studentid
    var psw=this.sloginForm.value.psw
    if(this.sloginForm.valid){
    this.ds.login(studentid,psw).subscribe((result:any)=>{
localStorage.setItem("currentUser",result.currentUser)
localStorage.setItem("currentstudentid",JSON.stringify(result.currentstudentid))
localStorage.setItem("token",JSON.stringify(result.token))



    alert(result.message)
    this.router.navigateByUrl("sdashboard")
    },
    
    result=>{
    alert( result.error.message)

    }
    
    )

    }
    else{
      alert('invalid form')
    }
   

  }

  alogin(){
    var adminid=this.aloginForm.value.adminid
    var apsw=this.aloginForm.value.apsw
    if(this.aloginForm.valid){  
if (adminid=="admin" && apsw=="admin") {
  alert("login success")
  this.router.navigateByUrl("adashboard")
}
else{
  alert("acno or password is incorrect")
}   
    }   
    else{
      alert('invalid form')
    }
   

  }

}
