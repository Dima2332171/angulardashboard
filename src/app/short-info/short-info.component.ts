import { Component, OnInit } from '@angular/core';
import {LoanService} from "../loan.servives";
import { Observable } from 'rxjs';
import {Loan} from "../loan.interface";

@Component({
  selector: 'app-short-info',
  templateUrl: './short-info.component.html',
  styleUrls: ['./short-info.component.css']
})
export class ShortInfoComponent implements OnInit {
  loans$!: Observable<Loan[]>;
  totalLoansByMonth: { month: string; count: number; totalAmount: number; totalInterest: number; returnedCount: number }[] = [];
  totalInterestSum: number = 0;
  averageLoanAmountByMonth: { month: string; averageAmount: number }[] = []; // Добавлено поле для хранения средней суммы видачи кредитов по месяцам


  constructor(private loanService: LoanService) { }

  ngOnInit(): void {
    this.loans$ = this.loanService.getLoans();
    this.fetchDataFromApi();
  }

  fetchDataFromApi(): void {
    this.loans$ = this.loanService.getLoans();

    this.loans$.subscribe(
      (loans) => {
        this.calculateMetrics(loans);
      },
      (error) => {
        console.error('Error fetching data from API', error);
      }
    );
  }

  calculateMetrics(loans: Loan[]): void {
    const groupedByMonthAndYear = this.groupByMonthAndYear(loans);
    this.totalLoansByMonth = Object.keys(groupedByMonthAndYear).map(monthAndYear => {
      const monthAndYearSplit = monthAndYear.split('-');
      const month = monthAndYearSplit[0];
      const year = monthAndYearSplit[1];
      const monthData = groupedByMonthAndYear[monthAndYear];
      const returnedCount = monthData.filter(loan => loan.actual_return_date).length;
      const totalAmount = monthData.reduce((total, loan) => total + loan.body, 0);
      const totalInterest = monthData.reduce((total, loan) => total + loan.percent, 0);
      const averageAmount = totalAmount / monthData.length;

      this.averageLoanAmountByMonth.push({
        month: `${month} ${year}`,
        averageAmount,
      });

      return {
        month: `${month} ${year}`,
        count: monthData.length,
        returnedCount,
        totalAmount,
        totalInterest,
      };
    });


  }

  groupByMonthAndYear(loans: Loan[]): { [key: string]: Loan[] } {
    return loans.reduce((acc: { [key: string]: Loan[] }, loan) => {
      const issuanceDate = new Date(loan.issuance_date);
      const monthAndYear = `${issuanceDate.getMonth() + 1}-${issuanceDate.getFullYear()}`;

      acc[monthAndYear] = acc[monthAndYear] || [];
      acc[monthAndYear].push(loan);
      return acc;
    }, {});
  }
}
