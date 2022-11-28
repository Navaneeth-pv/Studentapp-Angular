import { Component } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {
  name=""
  rollNo=""
  mobileNO=""
  admissionNo=""
  collegeName=""
  parentName=""
  parentPhNo=""
  userName=""
  password=""

  readValues=()=>
  {
    let data:any={
      "name":this.name,
      "rollNo":this.rollNo,
      "mobileNo":this.mobileNO,
      "admissionNo":this.admissionNo,
      "collegeName":this.collegeName,
      "parentName":this.parentName,
      "parentPhNo":this.parentPhNo,
      "userName":this.userName,
      "password":this.password
    }

    console.log(data)
    if (this.userName=="admin" && this.password=="123456") {
      alert("valid credentials")
    } else {
      alert("invalid credentials")
      
    }
  }


}
