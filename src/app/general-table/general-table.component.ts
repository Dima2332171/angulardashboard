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

  startDate: Date = new Date();
  endDate: Date = new Date();
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
    combineLatest([this.loans$, this.getFiltersObservable()]).subscribe(([loans, filters]) => {

      if (loans) {
        this.filteredLoans = this.filterLoans(loans, filters);
        // console.log('Після фільтрації:', this.filteredLoans);
      }
    });
  }

  private filterLoans(loans: Loan[], filters: FilterOptions): Loan[] {
    let filteredData = [...loans];

    if (filters.startDate) {
      filteredData = filteredData.filter(loan => {
        const issuanceDate = new Date(loan.issuance_date);
        const startFilterDate = new Date(filters.startDate!);
        // Порівнюємо тільки дату без часу
        issuanceDate.setHours(0, 0, 0, 0);
        startFilterDate.setHours(0, 0, 0, 0);
        return issuanceDate >= startFilterDate;
      });
    }


    if (filters.endDate) {
      filteredData = filteredData.filter(loan => {
        const issuanceDate = new Date(loan.issuance_date);
        const endFilterDate = new Date(filters.endDate!);
        // Порівнюємо тільки дату без часу
        issuanceDate.setHours(0, 0, 0, 0);
        endFilterDate.setHours(0, 0, 0, 0);
        return issuanceDate <= endFilterDate;
      });
    }

    if (filters.overdueFilter) {
      const today = new Date();
      filteredData = filteredData.filter(loan => {
        const actualReturnDate = new Date(loan.actual_return_date!);
        return !loan.actual_return_date && actualReturnDate < today;
      });
    }
    return filteredData;
  }

  private getFiltersObservable(): Observable<FilterOptions> {
    return of({
      startDate: this.startDate,
      endDate: this.endDate,
      overdueFilter: this.overdueFilter,
    });
  }
}
