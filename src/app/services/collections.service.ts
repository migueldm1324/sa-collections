import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collection } from '../models/collection.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class CollectionsService {
  private apiUrl = environment.apiUrl;
  private logger: string = '[CollectionsService]';

  constructor(private http: HttpClient) {}

  public getCollectionsByUserId(userId: string): Observable<Collection[]> {
    console.log(this.logger, 'Getting Collections by User ID ->', userId);
    return this.http.get<Collection[]>(`${this.apiUrl}/${userId}/collections`);
  }
}