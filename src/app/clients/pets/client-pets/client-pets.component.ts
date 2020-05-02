import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientSaveIdService } from '../../services/client-save-id.service';

@Component({
  selector: 'app-client-pets',
  templateUrl: './client-pets.component.html',
  styleUrls: ['./client-pets.component.scss']
})
export class ClientPetsComponent implements OnInit {

  constructor(private router: Router,
              public clientId: ClientSaveIdService
              ) { }

  ngOnInit(): void {
  }

  createPetCard() {
    this.router.navigate([`clients/${this.clientId.clientId}`, 'create-pets']);
  }
}
