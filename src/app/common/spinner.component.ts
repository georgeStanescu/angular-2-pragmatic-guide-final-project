import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `
    <div *ngIf="visible">
      <i class="fa fa-spinner fa-spin fa-3x"></i>
    </div>
  `
})
export class SpinnerComponent implements OnInit {
  @Input() visible: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
