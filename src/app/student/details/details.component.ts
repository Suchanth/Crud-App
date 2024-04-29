import { Component,OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  alldetails:Student[]=[];
  constructor(private studentService:StudentService){}
  
  ngOnInit(){
    this.studentService.getData().subscribe((data)=>{
      this.alldetails = data;

    })
  }
  deleteItem(id:number){
    this.studentService.deleteData(id).subscribe({
      next:(data)=>{
        this.alldetails=this.alldetails.filter(_ => _.id != id)
      }
    })
  }
}
