import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientService } from '../services/client.service';


@Component({
  selector: 'app-create-client-card',
  templateUrl: './create-client-card.component.html',
  styleUrls: ['./create-client-card.component.scss']
})
export class CreateClientCardComponent implements OnInit {
  public typeHelp: Array<string> = ['Временный', 'Вызова', 'Клиника', 'Постоянный', 'Случайный'];
  public listHowToFindClinic: Array<string> = ['Заводчик', 'Интернет', 'Обслуживались ранее', 'От знакомых', 'Рекламная вывеска'];
  public selectedCity = 'Город';
  public selectedStreet = 'Улица';
  public filteredCities: Observable<string>;
  public form: FormGroup;

  constructor(private router: Router,
              private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      surname: new FormControl(''),
      name: new FormControl(''),
      patronymic: new FormControl(''),
      passportNumber: new FormControl(''),
      mobilePhone: new FormControl(''),
      homePhone: new FormControl(''),
      workPhone: new FormControl(''),
      email: new FormControl(''),
      discount: new FormControl(''),
      numberInDocument: new FormControl(''),
      typeOrReception: new FormControl(''),
      howToFindClinic: new FormControl(''),
      unsubscribe: new FormControl(false),
      clientInBlackList: new FormControl(false),
      typeCity: new FormControl('Город'),
      cityName: new FormControl('Минск'),
      typeStreet: new FormControl('Улица'),
      streetName: new FormControl(''),
      numberHouse: new FormControl(''),
      zipCode: new FormControl(''),
      clientDescription: new FormControl('')
    });
  }

// TODO create method add in db
  addMoreType() {
    console.log('hello world');
  }

  addMoreHowToFindClinic() {
  }

  backForClients() {
    this.router.navigate(['/clients']);
  }

  save() {
    this.clientService.addClient(this.form.value);
    this.router.navigate(['/clients']);
  }


}
