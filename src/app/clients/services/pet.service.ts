import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPetInterface } from '../interface/pet.interface';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) {
  }

  getAllPets(id: string): Observable<IPetInterface[]> {
    return this.http.get<IPetInterface[]>(`http://localhost:8000/pets/${id}`).pipe(share());
  }

  addPet(body): void {
    this.http.post('http://localhost:8000/pets', body)
      .subscribe(() => {
      }).unsubscribe();
  }
}

