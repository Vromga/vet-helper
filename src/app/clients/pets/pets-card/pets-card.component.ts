import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { PetService } from '../../services/pet.service';
import { IPetInterface } from '../../interface/pet.interface';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DateOfBornService } from '../../../share/services/date-of-born.service';
import { BehaviorSubject, Subscription } from 'rxjs';

interface IClientID {
  id: string;
}

@Component({
  selector: 'app-pets-card',
  templateUrl: './pets-card.component.html',
  styleUrls: ['./pets-card.component.scss']
})
export class PetsCardComponent implements OnInit, AfterContentInit, OnDestroy {
  public pets: IPetInterface[];
  public subscribe: Subscription;
  private dateNow: number;
  public clientID: string;

  constructor(private petService: PetService,
              private route: ActivatedRoute,
              private router: Router,
              public dateOfBorn: DateOfBornService) {
  }

  ngOnInit(): void {
    this.dateNow = new Date().getTime();
    this.route.parent.params.subscribe((value: IClientID) => this.clientID = value.id);
    this.subscribe = this.petService.getAllPets(this.clientID).subscribe((pets: IPetInterface[]) => {
      this.pets = pets;
    });
  }

  ngAfterContentInit(): void {

  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

  openCard(id: string) {
    this.router.navigate([`clients/${this.clientID}/pets`, id]);
  }

  howManyYearsLive(date): string {
    const dateBorn = new Date(date).getTime();
    return this.dateOfBorn.calculateDate((this.dateNow - dateBorn));
  }
}
