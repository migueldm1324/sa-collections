import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  private apiUrl = environment.apiUrl;
  private logger = '[UserService]';
  private _user: User | null = null;

  constructor(private http: HttpClient) {}

  public setUser(user: User): void {
    console.log(this.logger, 'Setting User ->', user);
    this._user = { ...user };
  }

  public getUser(): any {
    console.log(this.logger, 'Getting User');
    return this._user ? { ...this._user } : null;
  }

  public clearUser(): void {
    console.log(this.logger, 'Clearing User');
    this._user = null;
  }

  public getUserByUsername(username: string): Observable<User[]> {
    console.log(this.logger, 'Getting user ->', username);
    return this.http.get<User[]>(`${this.apiUrl}/users?username=${username}`);
  }
}