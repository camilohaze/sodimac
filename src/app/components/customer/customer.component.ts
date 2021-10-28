import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customerName: string = '';
  customers: string[] = [];

  constructor() { }

  ngOnInit(): void { }

  onClick_addCustomer() {
    if (!!this.customerName) {
      this.customers.push(this.customerName);
      this.customerName = '';
    }
  }
}
