import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {UsersService} from "../shared/service/users.service";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  user;
  repo;
  followers;
  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let name = params['name'];
      this.usersService.getUser(name).subscribe((data) => {
        this.user = data;
      });
      this.usersService.getFollowers(name).subscribe((data) => {
        this.followers = data;
      });
      this.usersService.getRepos(name).subscribe((data) => {
        this.repo = data;
      });
    });
  }

  selectUser(user){
    this.router.navigate(['/user/' + user.login]);
  }

}
