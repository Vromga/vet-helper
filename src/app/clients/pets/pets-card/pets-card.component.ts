import { AfterContentInit, Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet.service';
import { IPetInterface } from '../../interface/pet.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientSaveIdService } from '../../services/client-save-id.service';

@Component({
  selector: 'app-pets-card',
  templateUrl: './pets-card.component.html',
  styleUrls: ['./pets-card.component.scss']
})
export class PetsCardComponent implements OnInit, AfterContentInit {
  public pets: IPetInterface[];
  constructor(private petService: PetService,
              private route: ActivatedRoute,
              private router: Router,
              public clientSaveId: ClientSaveIdService) {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.petService.getAllPets(this.clientSaveId.clientId).subscribe((pets: IPetInterface[]) => {
        this.pets = pets;
      });
  }

  openCard(id: string) {
    this.router.navigate([`clients/${this.clientSaveId.clientId}/pets`, id]);
  }
}
