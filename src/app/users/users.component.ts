import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { IUser } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[];
  isLoading: boolean = true;

  constructor(private _service: UsersService) { }

  ngOnInit() {
    this._service.getUsers()
      .subscribe(users => {
        this.users = users;
      },
      null,
      () => {
        this.isLoading = false;
      });
  }

}
