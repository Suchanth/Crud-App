import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path :"student/details",
    component:DetailsComponent
  },
  {
    path:"student",
    redirectTo:"student/details",
    pathMatch:"full"
  },
  {
    path:"",
    redirectTo:"student/details",
    pathMatch:"full"
  },
  {
    path:"student/create",
    component:CreateComponent
  },
  {
    path:"student/update/:id",
    component:UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
