import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [EmployeeService],     //changed EmployeeService given as provider
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'employeemanagerapp';
  public employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}




































/* Jonathan
    import { Component } from '@angular/core';
    import { RouterOutlet } from '@angular/router';
    import { Employee } from './employee';
    import { EmployeeService } from './employee.service';
    import { OnInit } from '@angular/core';
    import { HttpErrorResponse } from '@angular/common/http';
    // import { provideHttpClient } from '@angular/common/http'; voorlopig niet nodig
    import { CommonModule } from '@angular/common'; //JDR: did vervangt import in een app module
     
    @Component({
      selector: 'app-root',
      standalone: true,
      providers: [],
     
      imports: [RouterOutlet, CommonModule],
      templateUrl: './app.component.html',
      styleUrl: './app.component.css'
    })
    export class AppComponent implements OnInit{
      title = 'employeemanagerapp'
      public employees: Employee[]= []  
      
     
      constructor (private employeeService: EmployeeService) {}
     
      ngOnInit() {
        this.getEmployees()
      }
       
     
      public getEmployees(): void {
        this.employeeService.getEmployees().subscribe(
          (response: Employee[]) => {
            this.employees = response;
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        );
      }
     
    }
     




 */






 
/*  as subscribe depricated

    import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeService } from './employee.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'employeemanagerapp'
  public employees: Employee[]= []  
employee: any
 
  constructor (private employeeService: EmployeeService) {}
  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employees$ = this.employeeService.getEmployees();
  }
} */