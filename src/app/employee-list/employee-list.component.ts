import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
employees: Employee[];
  constructor(private employeeservice: EmployeeService,
              private router: Router) { }

  ngOnInit(): void {
    /*this.employees = [{
      id: 1 ,
     firstName : 'anu',
      lastName: 'kumari',
      emailId: 'anu@gmail.com',
      BankName: 'central bank',
      AccountNumber: 12345678,
      balance: 123456
      },
      {
        id: 2 ,
        firstName : 'anuradha',
        lastName: 'kumari',
        emailId: 'anuradha@gmail.com',
        BankName: 'central bank',
        AccountNumber: 12345678,
        balance: 123456
      }];*/
    this.getEmployees();
  }
// tslint:disable-next-line:typedef
private getEmployees(){
    this.employeeservice.getEmployeeList().subscribe(data => {
      this.employees = data;
    });
}
// tslint:disable-next-line:typedef
updateEmployee(id: number){
  this.router.navigate(['update-employee', id]);
}
// tslint:disable-next-line:typedef
deleteEmployee(id: number){
this.employeeservice.deleteEmployee(id).subscribe(data => {
  console.log(data);
  this.getEmployees();
});
}
// tslint:disable-next-line:typedef
employeeDetails(id: number){
  this.router.navigate(['employee-details', id]);
}
}
