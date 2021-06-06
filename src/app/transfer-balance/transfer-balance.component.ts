import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
import {EmployeeService} from '../employee.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-transfer-balance',
  templateUrl: './transfer-balance.component.html',
  styleUrls: ['./transfer-balance.component.css']
})
export class TransferBalanceComponent implements OnInit {
  id: number;
  employee: Employee = new  Employee();
  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
        this.gotoEmployeeList();
      }
      , error => console.log(error));
  }
  // tslint:disable-next-line:typedef
  gotoEmployeeList(){
    this.router.navigate(['/transfer-money']);
  }

}
