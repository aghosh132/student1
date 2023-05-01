import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {

    // this.getDetails()

  }



accept(studenti:any){

const data= {studenti} 
 return this.http.post('http://localhost:3000/accept',data)

}
viewstatus(studenti:any){
 const data= {studenti} 
 return this.http.post('http://localhost:3000/viewstatus',data)
}

  sregister(studentid: any, date: any, reason: any,depname:any) {
    const data = { studentid,date, reason,depname }
    return this.http.post('http://localhost:3000/sregister', data)
  }


  register(studentid: any, sname: any, psw: any) {
    const data = { studentid, sname, psw }
    return this.http.post('http://localhost:3000/register', data)
  }

  alogin(adminid: any, apsw: any) {

    const data = { adminid, apsw }
    return this.http.post('http://localhost:3000/login', data)

  }


  login(studentid: any, psw: any) {

    const data = { studentid, psw }
    return this.http.post('http://localhost:3000/login', data)

  }

  adminLogin(studentid: any) {

    const data = { studentid}
    return this.http.post('http://localhost:3000/adminLogin', data)
  }

  
   reci(){
    return this.http.get('http://localhost:3000/reci')
   }


}
