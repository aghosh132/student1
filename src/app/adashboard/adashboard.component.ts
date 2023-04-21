import { Component } from '@angular/core';
import { SdashboardComponent } from '../sdashboard/sdashboard.component';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-adashboard',
  templateUrl: './adashboard.component.html',
  styleUrls: ['./adashboard.component.css']
})
export class AdashboardComponent {

uhiArray:any
  accepted:any ="leave accepted"
  rejected:any="leave rejected"
constructor(private ds:DataService){
this.ds.adminLogin(JSON.parse(localStorage.getItem("currentstudentid") || "")).subscribe((result:any)=>{
  this.uhiArray=result.transactions
})
}

accept(){
  var accepted=this.accepted
  this.ds.accept(accepted)
}
reject(){
  var rejected=this.rejected
}
}
