import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ReportHandlerService {
  
  private reportList: AngularFireList<any>;

  constructor(
    private firebaseDatabase: AngularFireDatabase
  ) { 
    //this.reportList =  this.firebaseDatabase.list('items');
    this.reportList =  this.firebaseDatabase.list('as​ trial1 2020-09-09-07-51');
  }

  getReportFromDatabase()
  {
    return this.reportList;
  }
}
