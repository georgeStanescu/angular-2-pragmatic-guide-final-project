import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { CommonValidators, IFormComponent } from "../common";
import { UsersService } from "./users.service";
import { IUser } from "./user";

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.css']
})
export class UserEditorComponent implements IFormComponent, OnInit {
  formGroup: FormGroup;

  constructor(formBuilder: FormBuilder, private _service: UsersService, private _router: Router) {
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
  }

  hasUnsavedChanges() {
    return this.formGroup.dirty;
  }

  addUser() {
    let user = <IUser>{ name: this.formGroup.get("nameControl").value, email: this.formGroup.get("emailControl").value };
    
    this._service.saveUser(user)
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
