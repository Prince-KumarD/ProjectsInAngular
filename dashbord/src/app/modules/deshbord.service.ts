import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeshbordService {

  constructor() { }
  lineChart() {
    return [{
      name: 'Consultation',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Clinic',
      y: 11.84
    }, {
      name: 'Practitioner',
      y: 10.85
    }];
  }
}
