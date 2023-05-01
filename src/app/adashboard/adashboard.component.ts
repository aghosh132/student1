import { Component } from '@angular/core';
import { SdashboardComponent } from '../sdashboard/sdashboard.component';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-adashboard',
  templateUrl: './adashboard.component.html',
  styleUrls: ['./adashboard.component.css']
})
export class AdashboardComponent {
ac:any
uhiArray:any
  accepted:any ="leave accepted"
  rejected:any="leave rejected"
constructor(private ds:DataService){
this.ds.reci().subscribe((result:any)=>{
  this.uhiArray=result.suber
})
}

accept(studentid:any){

  var studentid=studentid.value

 this.ds.accept(studentid).subscribe((result:any)=>{
  
  alert(result.message)

  
 },result=>{
  alert(result.error.message)
 })
}
reject(){
  var rejected=this.rejected
}
}
