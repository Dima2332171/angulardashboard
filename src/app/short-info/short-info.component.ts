import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-short-info',
  templateUrl: './short-info.component.html',
  styleUrls: ['./short-info.component.css']
})
export class ShortInfoComponent implements OnInit {
  loans$: Observable<any[]> = new Observable<any[]>();
  totalLoansByMonth: { month: string; count: number; totalAmount: number; totalInterest: number; returnedCount: number }[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchDataFromApi();
  }

  fetchDataFromApi(): void {
    const apiUrl = 'https://raw.githubusercontent.com/LightOfTheSun/front-end-coding-task-db/master/db.json';

    this.loans$ = this.http.get<any[]>(apiUrl);

    this.loans$.subscribe(
      (loans) => {
        this.calculateMetrics(loans);
      },
      (error) => {
        console.error('Помилка при отриманні даних з API', error);
      }
    );
  }

  calculateMetrics(loans: any[]): void {
    const groupedByMonthAndYear = this.groupByMonthAndYear(loans);
    this.totalLoansByMonth = Object.keys(groupedByMonthAndYear).map(monthAndYear => {
      const monthAndYearSplit = monthAndYear.split('-');
      const month = monthAndYearSplit[0];
      const year = monthAndYearSplit[1];
      const monthData = groupedByMonthAndYear[monthAndYear];
      const returnedCount = monthData.filter(loan => loan.actual_return_date).length;
      const totalAmount = monthData.reduce((total, loan) => total + loan.body, 0);
      const totalInterest = monthData.reduce((total, loan) => total + loan.percent, 0);

      return {
        month: `${month} ${year}`,
        count: monthData.length,
        returnedCount,
        totalAmount,
        totalInterest,
      };
    });
  }

  groupByMonthAndYear(loans: any[]): { [key: string]: any[] } {
    return loans.reduce((acc, loan) => {
      const issuanceDate = new Date(loan.issuance_date);
      const monthAndYear = `${issuanceDate.getMonth() + 1}-${issuanceDate.getFullYear()}`;

      acc[monthAndYear] = acc[monthAndYear] || [];
      acc[monthAndYear].push(loan);
      return acc;
    }, {});
  }
}
