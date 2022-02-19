import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BpRecordsRoutingModule } from './bp-records-routing.module';
import { ListRecordsComponent } from './list-records/list-records.component';
import { NewRecordComponent } from './new-record/new-record.component';
import { RecordItemComponent } from './list-records/record-item/record-item.component';


@NgModule({
  declarations: [
    ListRecordsComponent,
    NewRecordComponent,
    RecordItemComponent
  ],
  imports: [
    CommonModule,
    BpRecordsRoutingModule
  ]
})
export class BpRecordsModule { }
