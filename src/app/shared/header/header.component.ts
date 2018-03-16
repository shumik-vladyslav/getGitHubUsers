import { Component, OnInit } from '@angular/core';
import {UsersService} from "../service/users.service";
import {Router, RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  search = "";

  users;

  autocomplete;

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  select(item){
    this.search = item.login;
    this.autocomplete = [];
    this.router.navigate(['/user/' + item.login]);
  }

  change(e){
    let autocomplete = [];

    if(!e){
      this.autocomplete = autocomplete;

      return;
    }
    for(let item of this.users){
      if(item.login.match("^" + e)){
        autocomplete.push(item);
      }
    }
    this.autocomplete = autocomplete;
  }

}
