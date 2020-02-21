import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public pageTitle: string;
  constructor() {
    this.pageTitle = 'Registrese';
  }

  ngOnInit(): void {
    console.log('cargando componente register');
  }

}
