import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';
import {Employee} from '../employee';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css']
})
export class TransferMoneyComponent implements OnInit {
  employees: Employee[];
  constructor(private employeeservice: EmployeeService,
              private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  // tslint:disable-next-line:typedef
  private getEmployees() {
    this.employeeservice.getEmployeeList().subscribe(data => {
      this.employees = data;
    });
  }
  // tslint:disable-next-line:typedef
  transfer(id: number){
    this.router.navigate(['transfer-balance', id]);
  }
}
