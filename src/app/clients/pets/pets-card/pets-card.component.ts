import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { PetService } from '../../services/pet.service';
import { IPetInterface } from '../../interface/pet.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientSaveIdService } from '../../services/client-save-id.service';
import { DateOfBornService } from '../../../share/services/date-of-born.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pets-card',
  templateUrl: './pets-card.component.html',
  styleUrls: ['./pets-card.component.scss']
})
export class PetsCardComponent implements OnInit, AfterContentInit, OnDestroy {
  public pets: IPetInterface[];
  public subscribe: Subscription;
  private dateNow: number;

  constructor(private petService: PetService,
              private route: ActivatedRoute,
              private router: Router,
              public clientSaveId: ClientSaveIdService,
              public dateOfBorn: DateOfBornService) {
  }

  ngOnInit(): void {
    this.dateNow = new Date().getTime();
  }

  ngAfterContentInit(): void {
    this.subscribe = this.petService.getAllPets(this.clientSaveId.clientId).subscribe((pets: IPetInterface[]) => {
      this.pets = pets;
    });
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

  openCard(id: string) {
    this.router.navigate([`clients/${this.clientSaveId.clientId}/pets`, id]);
  }

  howManyYearsLive(date): string {
    const dateBorn = new Date(date).getTime();
    return this.dateOfBorn.calculateDate((this.dateNow - dateBorn));
  }
}
