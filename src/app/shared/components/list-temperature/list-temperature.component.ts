import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from 'src/app/app.service';
import * as moment from 'moment';
import * as  kelvinToCelsius from 'kelvin-to-celsius'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-temperature',
  templateUrl: './list-temperature.component.html',
  styleUrls: ['./list-temperature.component.css']
})
export class ListTemperatureComponent implements OnInit, OnDestroy {
  private dataSubscription: Subscription;

  temperatures;

  constructor(
    private appService:AppService
  ) {
    this.dataSubscription = appService.data$.subscribe(res => {
      this.temperatures.push(res);
      
    });

   }

  ngOnInit() {
    this.getData()
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe()
  }

  getData() {
    this.appService.getData().subscribe(res => {

      res.forEach(e => {
        e.temp.max = kelvinToCelsius(e.temp.max);
        e.dt = moment.unix(e.dt).format('MMMM DD, YYYY')
      });

      this.temperatures = res;
      
    })
  }

}
