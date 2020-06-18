import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutocompletePetService {
  public breeds;
  private unsubscription$ = new Subject();

  constructor(private http: HttpClient) {
  }

  private getAutocomplete(options: string): void {
    this.http.get(`http://localhost:8000/breeds/${options}`)
      .pipe(
        map(value => value[0].breed),
        takeUntil(this.unsubscription$)).subscribe(value => this.breeds = value);
    this.unsubscription$.complete();
  }

  public getOptionsForAutocomplete(option: string) {
    switch (option) {
      case 'Сельскохозяйственные':
        this.getAutocomplete('farmanimal');
        break;
      case 'Кошки':
        this.getAutocomplete('cat');
        break;
      case 'Птицы':
        this.getAutocomplete('bird');
        break;
      case 'Рептилии':
        this.getAutocomplete('reptile');
        break;
      case 'Грызуны':
        this.getAutocomplete('rodent');
        break;
      case'Собаки':
        this.getAutocomplete('dog');
        break;
      default:
        break;
    }
  }
}
