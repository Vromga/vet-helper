import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { PetService } from '../../services/pet.service';
import { ClientSaveIdService } from '../../services/client-save-id.service';

@Component({
  selector: 'app-create-pets-card',
  templateUrl: './create-pets-card.component.html',
  styleUrls: ['./create-pets-card.component.scss']
})
export class CreatePetsCardComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private petService: PetService,
    public clientSaveId: ClientSaveIdService
  ) {
  }

  ngOnInit(): void {
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
    console.log(this.clientSaveId.clientId);
    this.router.navigate([`clients/${this.clientSaveId.clientId}`]);
  }

  save() {
    const reqBody = this.form.value;
    reqBody.clientId = this.clientSaveId.clientId;
    this.petService.addPet(reqBody);
    this.chancelCreatePet();
  }
}
