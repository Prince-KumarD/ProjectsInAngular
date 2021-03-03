import { Component, OnInit } from '@angular/core';
import { ScorecardService } from '../scorecard.service';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {

  constructor(private scoreCardService: ScorecardService) { }

  clinic: number ;
  doctors: number;
  clinicPoint: number;
  doctorsPoint: number;
  totalPoints: number;
  totalClinicPoint: number;
  totalDoctorsPoint: number;
  consultation: number;

  ngOnInit(): void {
    this.clinic = this.scoreCardService.clinic;
    this.doctors = this.scoreCardService.doctors;
    this.clinicPoint = this.scoreCardService.clinicPoint;
    this.doctorsPoint = this.scoreCardService.doctorsPoint;
    this.totalPoints = this.scoreCardService.totalPoints;
    this.totalClinicPoint  = this.scoreCardService.clinicPoint * this.scoreCardService.clinic;
    this.totalDoctorsPoint = this.scoreCardService.doctorsPoint * this.scoreCardService.doctors;
    this.consultation = this.scoreCardService.consultation;
  }

}
