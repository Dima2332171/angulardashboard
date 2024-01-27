import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loan } from "./loan.interface";

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  private apiUrl = 'https://raw.githubusercontent.com/LightOfTheSun/front-end-coding-task-db/master/db.json';
  loans$: Observable<Loan[]>;

  constructor(private http: HttpClient) {
    this.loans$ = this.http.get<Loan[]>(this.apiUrl);
  }

  getLoans(): Observable<Loan[]> {
    return this.loans$;
  }
}
