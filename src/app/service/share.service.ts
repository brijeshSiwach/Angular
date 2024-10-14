import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  public data = new BehaviorSubject<any> (null);
  data$ = this.data.asObservable()  
  constructor() { }

  emitData(edata: any){
    this.data.next(edata)
  }
}
