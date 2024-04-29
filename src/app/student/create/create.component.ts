import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { Student } from '../student';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

    constructor(private studentService:StudentService,private router:Router){}
    formData:Student={
      id:0,
      name:"",
      department:"",
      place:"",
    }
    create(){
      this.studentService.createData(this.formData).subscribe({
        next:(data)=>{
          this.router.navigate(['student/details'])
        },
        error:(err)=>{
          console.log(err);
        }
      })
    }
}
