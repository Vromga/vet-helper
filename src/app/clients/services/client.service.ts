import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IClients } from '../interface/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  public clients: IClients[];

  constructor(private http: HttpClient) {
  }

  getAllClients() {
    return this.http.get<IClients[]>('http://localhost:8000/users');
  }

  addClient(body) {
    this.http.post('http://localhost:8000/users', body)
      .subscribe(() => {
        this.getAllClients();
      }).unsubscribe();
  }

}
