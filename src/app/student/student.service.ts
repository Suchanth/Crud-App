import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get<Student[]>('http://localhost:3000/students')
  }
  createData(data:Student){
    return this.http.post('http://localhost:3000/students',data)
  }
  editData(id:number){
    return this.http.get<Student>(`http://localhost:3000/students/${id}`)
  }
  updateData(data:Student){
    return this.http.put<Student>(`http://localhost:3000/students/${data.id}`,data)
  }
  deleteData(id:number){
    return this.http.delete<Student>(`http://localhost:3000/students/${id}`)
  }
}
