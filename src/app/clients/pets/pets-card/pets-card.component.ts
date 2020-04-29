import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet.service';
import { IPetInterface } from '../../interface/pet.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pets-card',
  templateUrl: './pets-card.component.html',
  styleUrls: ['./pets-card.component.scss']
})
export class PetsCardComponent implements OnInit {
  public pets: IPetInterface[];

  constructor(private petService: PetService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.petService.getAllPets(params.id)
        .subscribe((pets: IPetInterface[]) => {
            this.pets = pets;
          }
        );
    });
  }
}
