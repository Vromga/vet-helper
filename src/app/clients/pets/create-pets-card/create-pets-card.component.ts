import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-create-pets-card',
  templateUrl: './create-pets-card.component.html',
  styleUrls: ['./create-pets-card.component.scss']
})
export class CreatePetsCardComponent implements OnInit {
  private id: string;
  public form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private petService: PetService
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => this.id = params.id).unsubscribe();

    this.form = new FormGroup({
      name: new FormControl(''),
      age: new FormControl(''),
      kindOfAnimal: new FormControl(''),
      breed: new FormControl(''),
      color: new FormControl(''),
      chipNumber: new FormControl(''),
      sex: new FormControl(''),
      weightAnimal: new FormControl(''),
      description: new FormControl('')
    });
  }

  chancelCreatePet() {
    this.route.params.subscribe(params => {
      this.router.navigate([`clients/${this.id}`]);
    }).unsubscribe();
  }

  save() {
    const reqBody = this.form.value;
    reqBody.clientId = this.id;
    this.petService.addPet(reqBody);
    this.chancelCreatePet();
  }
}
