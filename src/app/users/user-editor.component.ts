import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { CommonValidators, IFormComponent } from "../common";
import { UsersService } from "./users.service";
import { IUser, User } from "./user";
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.css']
})
export class UserEditorComponent implements IFormComponent, OnInit {
  formGroup: FormGroup;
  private _userId: number;
  private user: IUser = new User();
  @Input() pageTitle: string = "Edit User";
  private _routeSubscription: Subscription;

  constructor(
    formBuilder: FormBuilder, 
    private _service: UsersService, 
    private _router: Router, 
    private _route: ActivatedRoute) {
    this.formGroup = formBuilder.group({
      nameControl: ['', Validators.required],
      emailControl: ['', Validators.compose([Validators.required, CommonValidators.emailInvalid])],
      phoneControl: ['', Validators.required],
      streetControl: ['', Validators.required],
      suiteControl: ['', Validators.required],
      cityControl: ['', Validators.required],
      zipCodeControl: ['', Validators.required]
    });
  }

  ngOnInit() {
    this._routeSubscription = this._route.params.subscribe((params) => {
      this._userId = +params['id'];
    });

    if (!this._userId) {
      this.pageTitle = "Add User";
      return;
    }

    this._service.getUser(this._userId)
      .subscribe(
        user => { this.user = user; },
        response => {}
      );
  }

  hasUnsavedChanges() {
    return this.formGroup.dirty;
  }

  processUser() {
    let response;

    if (this._userId) {
      response = this._service.addUser(this.user);
    } else {
      response = this._service.updateUser(this.user);
    }  

    response
    .subscribe((savedUser) => {
        console.log(savedUser);
      },
      null,
      () => {
        this.formGroup.markAsPristine();
        this._router.navigate(["/users"]);
      }
    );
  }
}
