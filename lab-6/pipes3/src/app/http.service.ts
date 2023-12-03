import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './interfaces/user.interface';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>('assets/users.json');
  }
}
