import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { CommonValidators, IFormComponent } from "../common";

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.css']
})
export class UserEditorComponent implements IFormComponent, OnInit {
  formGroup: FormGroup;

  constructor(formBuilder: FormBuilder) {
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
    console.log(this.formGroup.value);
  }

}
