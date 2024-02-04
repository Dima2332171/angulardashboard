import { Component, OnInit } from '@angular/core';
import { Observable, of, combineLatest } from 'rxjs';
import { LoanService } from "../loan.servives";
import { Loan } from "../loan.interface";
import {FilterOptions} from "../filteroptions.interface";


@Component({
  selector: 'app-general-table',
  templateUrl: './general-table.component.html',
  styleUrls: ['./general-table.component.css']
})
export class GeneralTableComponent implements OnInit {
  loans$!: Observable<Loan[]>;
  filteredLoans: Loan[] = [];

  startDate: Date = new Date(2015,1,1);
  endDate: Date = new Date();
  startDateReturn: Date = new Date(2015,1,1);
  endDateReturn: Date = new Date();
  overdueFilter: boolean = false;

  constructor(private loanService: LoanService) {
  }

  ngOnInit(): void {
    this.loans$ = this.loanService.getLoans();
    this.fetchDataFromApi();
  }

  fetchDataFromApi(): void {
    this.loanService.getLoans().subscribe(
      (data: Loan[]) => {
        this.loans$ = of(data);
        this.filteredLoans = [...data];
      },
      error => {
        console.error('Error fetching data from API:', error);
      }
    );
  }

  applyFilters(): void {
    this.getFiltersObservable().subscribe(filters => {
      if (this.loans$) {
        this.loans$.subscribe(loans => {
          if (loans) {
            this.filteredLoans = this.filterLoans(loans, filters);
          }
        });
      }
    });
  }

  private filterLoans(loans: Loan[], filters: FilterOptions): Loan[] {
    let filteredData = [...loans];

    if (filters.startDate&&filters.endDate) {
      filteredData = filteredData.filter(loan => {
        const issuanceDate = new Date(loan.issuance_date);
        const startFilterDate = new Date(filters.startDate!);
        const endFilterDate = new Date(filters.endDate!);
        issuanceDate.setHours(0, 0, 0, 0);
        startFilterDate.setHours(0, 0, 0, 0);
        return (issuanceDate >= startFilterDate)&&(issuanceDate <= endFilterDate);
      });
    }
    if (filters.overdueFilter) {
      const today = new Date();
      filteredData = filteredData.filter(loan => {
        const actualReturnDate = new Date(loan.actual_return_date!);
        const returnDate = new Date(loan.return_date);
        return !loan.actual_return_date && (actualReturnDate < today)||(actualReturnDate>returnDate);
      });
    }

    if(filters.startDateReturn&&filters.endDateReturn){
      filteredData = filteredData.filter(loan => {
        const startFilterDate = new Date(filters.startDateReturn!);
        const endFilterDate = new Date(filters.endDateReturn!);
        const actualReturnDate = new Date(loan.actual_return_date!);
        actualReturnDate.setHours(0, 0, 0, 0);
        startFilterDate.setHours(0, 0, 0, 0);
        return (actualReturnDate >= startFilterDate)&&(actualReturnDate <= endFilterDate);
      });
    }
    return filteredData;
  }

  private getFiltersObservable(): Observable<FilterOptions> {
    return of({
      startDate: this.startDate,
      endDate: this.endDate,
      overdueFilter: this.overdueFilter,
      startDateReturn: this.startDateReturn,
      endDateReturn: this.endDateReturn,
    });
  }
}
