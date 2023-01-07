import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '../models/title.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class TitlesService {
  private apiUrl = environment.apiUrl;
  private logger: string = '[TitlesService]';

  constructor(private http: HttpClient) {}

  public getTItlesByUserIdAndCategory(userId: string, category: string): Observable<Title[]> {
    console.log(this.logger, 'Getting Titles by User ID ->', userId, 'And Category ->', category);
    return this.http.get<Title[]>(`${this.apiUrl}/${userId}/${category}/titles`);
  }
}