import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScorecardService {

  constructor() { }
  clinic = 23;
  doctors = 17;
  clinicPoint = 5;
  doctorsPoint = 5;
  consultation = 109;
  totalPoints: number = (this.clinicPoint * this.clinic) + (this.doctorsPoint * this.doctors);
  msg = '';
  userName = 'Vikash';
}
