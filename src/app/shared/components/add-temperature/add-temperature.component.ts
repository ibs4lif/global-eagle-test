import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-add-temperature',
  templateUrl: './add-temperature.component.html',
  styleUrls: ['./add-temperature.component.css']
})
export class AddTemperatureComponent implements OnInit {




  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {

  }


  addTemperature(data){
    this.appService.passData({ temp: {max:data.temperature}, dt: moment().format('MMMM DD, YYYY') })
  }
}
