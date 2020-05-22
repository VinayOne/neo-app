import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  responsedata = {};

  constructor(private apiService: ApiService) {
    this.readData();
   }

  readData(){
    this.apiService.getData().subscribe(
      res => {this.responsedata = res;}
    )
  }

  ngOnInit(): void {
  }

}
