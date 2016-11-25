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

  deleteUser(user) {
    if (confirm("Are you sure you want to delete " + user.name + "?")) {
      let index = this.users.indexOf(user);
      this.users.splice(index, 1);

      this._service.deleteUser(user.id)
        .subscribe(null,
        err => {
          alert("Could not delete the user.");
          this.users.splice(index, 0, user);
        });
    }
  }
}
