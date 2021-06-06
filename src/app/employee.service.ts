import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observable, Observable} from 'rxjs';
import {Employee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private baseURL = 'http://localhost:8080/api/v1/employee';
  constructor(private httpclient: HttpClient) { }
  getEmployeeList(): Observable<Employee[]>{
    return this.httpclient.get<Employee[]>(`${this.baseURL}`);
  }
  createEmployee(employee: Employee): Observable<object>{
    return this.httpclient.post(`${this.baseURL}`, employee);
  }
  getEmployeeById(id: number): Observable<Employee>{
   return  this.httpclient.get<Employee>(`${this.baseURL}/${id}`);
  }
  // tslint:disable-next-line:ban-types
  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpclient.put(`${this.baseURL}/${id}`, employee);
  }
// tslint:disable-next-line:ban-types
  deleteEmployee(id: number): Observable<Object>{
    return this.httpclient.delete(`${this.baseURL}/${id}`);
}


}