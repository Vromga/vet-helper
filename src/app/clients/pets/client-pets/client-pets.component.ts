import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-pets',
  templateUrl: './client-pets.component.html',
  styleUrls: ['./client-pets.component.scss']
})
export class ClientPetsComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit(): void {
  }

  createPetCard() {
    this.route.params.subscribe(params => {
      this.router.navigate([`clients/${params.id}`, 'create-pets'], {queryParams: {
        id: params.id
        }});
    });
  }
}
