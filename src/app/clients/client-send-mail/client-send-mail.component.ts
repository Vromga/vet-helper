import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IEmailSend } from '../interface/emailSend.interface';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client-send-mail',
  templateUrl: './client-send-mail.component.html',
  styleUrls: ['./client-send-mail.component.scss']
})
export class ClientSendMailComponent implements OnInit {
  form: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public client: IEmailSend) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(),
      bodyMail: new FormControl(`Уважаемый ${this.client?.surname} ${this.client?.name} ${this.client?.patronymic}!`)
    })
  }
  // TODO Организовать отправку письма в NodeJS.
  sendMail() {
    console.log(this.form.value, this.client.email);
  }
}
