import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {
  formData:Student={
    id:0,
    name:'',
    department:'',
    place:'',
  }

  constructor(
    private studentService:StudentService,
    private router:Router,
    private route:ActivatedRoute
  ){}
  ngOnInit(): void {
    this.route.paramMap.subscribe((param)=>{
      let id = Number(param.get('id'));
      this.getByid(id);
    })
  }
  getByid(id:number){
    this.studentService.editData(id).subscribe((data)=>{
      this.formData = data;
    })
  }
  update(){
    this.studentService.updateData(this.formData).subscribe({
      next:(data)=>{
        this.router.navigate(['student/details'])
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
