import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ITherapyText } from '../../interface/therapyText.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pet-medical-card',
  templateUrl: './pet-medical-card.component.html',
  styleUrls: ['./pet-medical-card.component.scss']
})
export class PetMedicalCardComponent implements OnInit {
  private clientID: string;
  public therapyEditor: FormControl;
  public recommendationEditor: FormControl;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.parent.params.subscribe(value => this.clientID = value.id);
    this.therapyEditor = new FormControl();
    this.recommendationEditor = new FormControl();
  }

  getTherapyText(): ITherapyText {
    this.saveMedicalCardInDB();
    return {
      therapy: this.therapyEditor.value,
      recommendation: this.recommendationEditor.value
    };
  }

  // TODO: Сделать подключение к БД
  private saveMedicalCardInDB(): void {
    this.route.params
      .subscribe(console.log);
  }

  backToListAnimals() {
    this.router.navigate([`clients/${this.clientID}`, 'pets']);
  }
}
