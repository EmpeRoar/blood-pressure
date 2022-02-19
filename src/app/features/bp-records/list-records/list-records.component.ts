import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BPRecord } from 'src/app/models/bprecord.model';
import { BprecordsService } from '../../../services/bprecords/bprecords.service';

@Component({
  selector: 'app-list-records',
  templateUrl: './list-records.component.html',
  styleUrls: ['./list-records.component.scss']
})
export class ListRecordsComponent implements OnInit {

  records$: Observable<BPRecord[]> = this.bpRecorsSvc.getRecords();
  constructor(private bpRecorsSvc: BprecordsService) { 
   
  }

  ngOnInit(): void {

  }

}
