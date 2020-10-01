import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReportHandlerService } from '../report-handler.service'
declare var generatePointCloudChart: any;
declare var generateScatterChart: any;
declare var generatePieChart: any;

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  itemList: Observable<any>;
  reportList: object[];
  constructor(reportService: ReportHandlerService) {
    this.itemList = reportService.getReportFromDatabase().snapshotChanges();
    console.log(this.itemList);
    
  }

  ngOnInit(): void {
    generatePointCloudChart();
    generateScatterChart();
    generatePieChart();
  }

}
