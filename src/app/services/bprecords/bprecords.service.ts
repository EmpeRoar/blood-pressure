import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BPRecord } from '../../models/bprecord.model';

@Injectable({
  providedIn: 'root'
})
export class BprecordsService {

  constructor(private http: HttpClient) { }

  getRecords(): Observable<BPRecord[]> {
    //return this.http.get<BPRecord>(`${environment.api}/api/bprecords`);
    return of([
      {
        systolic:115,
        diastolic:70,
        date: new Date()
      },
      {
        systolic:125,
        diastolic:80,
        date: new Date()
      },
      
      {
        systolic:112,
        diastolic:90,
        date: new Date()
      }
    ] as BPRecord[]);
  }
}
