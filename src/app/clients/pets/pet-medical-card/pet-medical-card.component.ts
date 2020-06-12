import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ITherapyText } from '../../interface/therapyText.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../../services/pet.service';
import { pluck } from 'rxjs/operators';
import { IPetInterface } from '../../interface/pet.interface';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-pet-medical-card',
  templateUrl: './pet-medical-card.component.html',
  styleUrls: ['./pet-medical-card.component.scss']
})
export class PetMedicalCardComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  private clientID: string;
  public pet: IPetInterface;
  public therapyEditor: FormControl;
  public recommendationEditor: FormControl;

  constructor(private route: ActivatedRoute, private router: Router, public petService: PetService) {
  }

  ngOnInit(): void {
    this.subs.sink = this.route.parent.params.subscribe(value => this.clientID = value.id);
    this.subs.sink = this.route.params
      .pipe(pluck('idx'))
      .subscribe(idx => this.petService.getAllPets(this.clientID)
        .subscribe(((pets) => {
          [this.pet] = pets.filter(pet => pet._id === idx);
        })));
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

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
