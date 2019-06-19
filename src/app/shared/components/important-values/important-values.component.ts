import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import * as  kelvinToCelsius from 'kelvin-to-celsius'



@Component({
  selector: 'app-important-values',
  templateUrl: './important-values.component.html',
  styleUrls: ['./important-values.component.css']
})
export class ImportantValuesComponent implements OnInit {

  importantValues;

  constructor(
    private appService:AppService
  ) { }

  ngOnInit() {
    this.getImportantValues()
  }

  getImportantValues() {
    this.appService.getImportantValues().subscribe(res => {

      res.average = kelvinToCelsius(res.average);
      res.median = kelvinToCelsius(res.median);
      res.min = kelvinToCelsius(res.min);
      res.max = kelvinToCelsius(res.max);
      this.importantValues = res;
      
    })
  }

}
