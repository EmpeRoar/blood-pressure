import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-item',
  templateUrl: './record-item.component.html',
  styleUrls: ['./record-item.component.scss']
})
export class RecordItemComponent implements OnInit {

  @Input() systolic?: number;
  @Input() diastolic?: number;
  @Input() date?: Date;
  
  constructor() { }

  ngOnInit(): void {
  }

}
