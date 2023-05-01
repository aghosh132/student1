import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-viewstatus',
  templateUrl: './viewstatus.component.html',
  styleUrls: ['./viewstatus.component.css']
})
export class ViewstatusComponent {

data:any

constructor( private  ds:DataService){

// this.ad.accept
this.ds.viewstatus(JSON.parse(localStorage.getItem("currentstudentid" ) ||"")).subscribe((result:any)=>{
this.data=result.message


})

}



}
