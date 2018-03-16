import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UsersService {
  url = 'https://api.github.com/';
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.url + 'users');
  }

  getUser(name) {
    return this.http.get(this.url + 'users/' + name);
  }

  getFollowers(name) {
    return this.http.get(this.url + `users/${name}/followers`);
  }

  getRepos(name) {
    return this.http.get(this.url + `users/${name}/repos`);
  }
}
