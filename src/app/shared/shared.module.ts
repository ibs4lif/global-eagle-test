import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AddTemperatureComponent } from './components/add-temperature/add-temperature.component';
import { ListTemperatureComponent } from './components/list-temperature/list-temperature.component';
import { ImportantValuesComponent } from './components/important-values/important-values.component';
import { FormsModule } from '@angular/forms';

const classesToInclude = [
  HeaderComponent,
  AddTemperatureComponent, 
  ListTemperatureComponent,
  ImportantValuesComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: classesToInclude,
  exports: classesToInclude
})
export class SharedModule { }
