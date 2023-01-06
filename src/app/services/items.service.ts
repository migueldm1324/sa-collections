import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ItemsService {
  private apiUrl = environment.apiUrl;
  private logger: string = '[ItemsService]';

  constructor(private http: HttpClient) {}

  public getItemsByUserIdAndCategory(userId: string, category: string): Observable<Item[]> {
    console.log(this.logger, 'Getting Items by User ID ->', userId, 'And Category ->', category);
    return this.http.get<Item[]>(`${this.apiUrl}/${userId}/${category}`);
  }
}