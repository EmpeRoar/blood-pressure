import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRecordsComponent } from './list-records/list-records.component';
import { NewRecordComponent } from './new-record/new-record.component';

const routes: Routes = [
  {
    path: '',
    component: ListRecordsComponent
  },
  {
    path: 'new',
    component: NewRecordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BpRecordsRoutingModule { }
