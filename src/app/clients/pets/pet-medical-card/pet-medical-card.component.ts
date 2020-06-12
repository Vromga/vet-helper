import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pet-medical-card',
  templateUrl: './pet-medical-card.component.html',
  styleUrls: ['./pet-medical-card.component.scss']
})
export class PetMedicalCardComponent implements OnInit {
  therapyEditor: FormControl;
  text: string = '<em>hello</em>';
  constructor() { }

  ngOnInit(): void {
   this.therapyEditor = new FormControl();
   this.therapyEditor.valueChanges.subscribe(value => console.log(value));
  }

  getTherapyText() {
   this.text = this.therapyEditor.value
  }
}
