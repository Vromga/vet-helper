import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientSaveIdService } from '../../services/client-save-id.service';
import { Observable } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import { AutocompletePetService } from '../pet.services/autocompletePet/autocomplete-pet.service';
import { PetService } from '../../services/pet.service';


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
export class CreatePetsCardComponent implements OnInit, AfterViewChecked {
  public form: FormGroup;
  public kindOfAnimalOptions: string[] = ['Собаки', 'Кошки', 'Птицы', 'Рептилии', 'Грызуны', 'Сельскохозяйственные'];
  public genderOptions: string[] = ['Мужской', 'Женский', 'Кастрированный', 'Стерелизованный', 'Не известно'];
  public colorOptions: string[] = ['белый', 'голубой', 'голубой черепаховый', 'колор-поинт', 'коричневый',
    'лиловый', 'палевый', 'персиковый', 'разнообразный', 'рыжий', 'серебристый',
    'серый', 'тигровый', 'черепаховый', 'черноподпалый', 'черный'];
  public filteredKindOfAnimal: Observable<string[]>;
  public filterGender: Observable<string[]>;
  public filterBreeds: Observable<string[]>;
  public filterColor: Observable<string[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public clientSaveId: ClientSaveIdService,
    public ac: AutocompletePetService,
    private petService: PetService
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

    this.filterBreeds = this.form.valueChanges
      .pipe(
        startWith(''),
        map(val => this._filterBreed(val))
      );

    this.filterColor = this.form.valueChanges
      .pipe(
        startWith(''),
        map(val => this._filterColor(val))
      );

    this.form.valueChanges
      .pipe(
        filter((value: IForm) => value.kindOfAnimal !== '')
      ).subscribe((val: IForm) => this.ac.getOptionsForAutocomplete(val.kindOfAnimal));

  }

  ngAfterViewChecked() {
  }

  private _filterKindOfAnimal(val: IForm): string[] {
    const fv = val.kindOfAnimal?.toLowerCase();
    return this.kindOfAnimalOptions.filter(option => option.toLowerCase().includes(fv));
  }

  private _filterGender(val: IForm): string[] {
    const fv = val.gender?.toLowerCase();
    return this.genderOptions.filter(o => o.toLowerCase().includes(fv));
  }

  private _filterBreed(val: IForm): string[] {
    const fv = val.breed?.toLowerCase();
    return this.ac.breeds?.filter(o => o.toLowerCase().includes(fv));
  }

  private _filterColor(val: IForm): string[] {
    const fv = val.color?.toLowerCase();
    return this.colorOptions.filter(o => o.toLowerCase().includes(fv));
  }

  public chancelCreatePet(): void {
    this.router.navigate([`clients/${this.clientSaveId.clientId}`]);
  }

  public save(): void {
    const reqBody = this.form.value;
    reqBody.clientId = this.clientSaveId.clientId;
    this.petService.addPet(reqBody);
    this.chancelCreatePet();
  }
}


