import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ITherapyText } from '../../interface/therapyText';

@Component({
  selector: 'app-pet-medical-card',
  templateUrl: './pet-medical-card.component.html',
  styleUrls: ['./pet-medical-card.component.scss']
})
export class PetMedicalCardComponent implements OnInit {
  public therapyEditor: FormControl;
  public recommendationEditor: FormControl;

  constructor() {
  }

  ngOnInit(): void {
    this.therapyEditor = new FormControl();
    this.recommendationEditor = new FormControl();
  }

  getTherapyText(): ITherapyText {
    return {
      therapy: this.therapyEditor.value,
      recommendation: this.recommendationEditor.value
    };
  }
}
