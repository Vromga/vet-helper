import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { PetService } from '../../services/pet.service';
import { ClientSaveIdService } from '../../services/client-save-id.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


interface IForm {
  name: string;
  age: string;
  kindOfAnimal: string;
  breed: string;
  color: string;
  chipNumber: string;
  gender: string;
  weightAnimal: string;
  description: string;
}

@Component({
  selector: 'app-create-pets-card',
  templateUrl: './create-pets-card.component.html',
  styleUrls: ['./create-pets-card.component.scss']
})
export class CreatePetsCardComponent implements OnInit {
  public form: FormGroup;
  public kindOfAnimalOptions: string[] = ['Собаки', 'Кошки', 'Птицы', 'Рептилии', 'Грызуны', 'Сельскохозяйственные'];
  public genderOptions: string[] = ['Мужской', 'Женский', 'Кастрированный', 'Стерелизованный', 'Не известно'];
  public filteredKindOfAnimal: Observable<string[]>;
  public filterGender: Observable<string[]>;

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
      gender: new FormControl(''),
      weightAnimal: new FormControl(''),
      description: new FormControl('')
    });

    this.filteredKindOfAnimal = this.form.valueChanges
      .pipe(
        startWith(''),
        map(val => this._filterKindOfAnimal(val))
      );

    this.filterGender = this.form.valueChanges
      .pipe(
        startWith(''),
        map(val => this._filterGender(val))
      );
  }

  private _filterKindOfAnimal(val: IForm): string[] {
    const filterValue = val.kindOfAnimal?.toLowerCase();
    return this.kindOfAnimalOptions.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterGender(val: IForm): string[] {
    const fv = val.gender?.toLowerCase();
    console.log(fv);
    return this.genderOptions.filter(o => o.toLowerCase().includes((fv)));
  }

  chancelCreatePet() {
    this.router.navigate([`clients/${this.clientSaveId.clientId}`]);
  }

  save() {
    const reqBody = this.form.value;
    // reqBody.clientId = this.clientSaveId.clientId;
    // this.petService.addPet(reqBody);
    // this.chancelCreatePet();
  }
}
