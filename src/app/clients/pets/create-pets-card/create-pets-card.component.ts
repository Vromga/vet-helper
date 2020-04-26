import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-pets-card',
  templateUrl: './create-pets-card.component.html',
  styleUrls: ['./create-pets-card.component.scss']
})
export class CreatePetsCardComponent implements OnInit {
  private id: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => this.id = params.id);
  }

  chancelCreatePet() {
    this.route.params.subscribe(params => {
      this.router.navigate([`clients/${this.id}`]);
    });
  }
}
