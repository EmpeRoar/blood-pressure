import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeComponent } from './layouts/prime/prime.component';

const routes: Routes = [
  {
    path:'',
    component:PrimeComponent,
    loadChildren:()=> import(`../app/features/bp-records/bp-records.module`).then(x => x.BpRecordsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
