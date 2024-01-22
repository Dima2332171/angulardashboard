import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, combineLatest } from 'rxjs';


@Component({
  selector: 'app-general-table',
  templateUrl: './general-table.component.html',
  styleUrls: ['./general-table.component.css']
})
export class GeneralTableComponent implements OnInit {
  loans$: Observable<any[]> = new Observable<any[]>();
  filteredLoans: any[] = [];

  startDate: Date = new Date();
  endDate: Date = new Date();
  overdueFilter: boolean = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.fetchDataFromApi();
  }

  fetchDataFromApi(): void {
    const apiUrl = 'https://raw.githubusercontent.com/LightOfTheSun/front-end-coding-task-db/master/db.json';

    this.http.get(apiUrl).subscribe(
      (data: any) => {
          this.loans$ = of(data);
          this.filteredLoans = [...data];
      },
      error => {
        console.error('Помилка при отриманні даних:', error);
      }
    );
  }

  applyFilters(): void {
    combineLatest([this.loans$, this.getFiltersObservable()]).subscribe(([loans, filters]) => {

      console.log('Отримані дані loans:', loans, 'отримані дані filters', filters);

      if (loans) {
        this.filteredLoans = this.filterLoans(loans, filters);
        console.log('Після фільтрації:', this.filteredLoans);
      }
    });
  }

  // Отримання відфільтрованих даних
  private filterLoans(loans: any[], filters: any): any[] {
    let filteredData = [...loans];

    if (filters.startDate) {
      filteredData = filteredData.filter(loan => {
        const issuanceDate = new Date(loan.issuance_date);
        const startFilterDate = new Date(filters.startDate);
        // Порівнюємо тільки дату без часу
        issuanceDate.setHours(0, 0, 0, 0);
        startFilterDate.setHours(0, 0, 0, 0);
        return issuanceDate >= startFilterDate;
      });
    }


    if (filters.endDate) {
      filteredData = filteredData.filter(loan => {
        const issuanceDate = new Date(loan.issuance_date);
        const endFilterDate = new Date(filters.endDate);
        // Порівнюємо тільки дату без часу
        issuanceDate.setHours(0, 0, 0, 0);
        endFilterDate.setHours(0, 0, 0, 0);
        return issuanceDate <= endFilterDate;
      });
    }

    if (filters.overdueFilter) {
      const today = new Date();
      filteredData = filteredData.filter(loan => {
        const actualReturnDate = new Date(loan.actual_return_date);
        return !loan.actual_return_date && actualReturnDate < today;
      });
    }
    return filteredData;
  }

  private getFiltersObservable(): Observable<any> {
    return of({
      startDate: this.startDate,
      endDate: this.endDate,
      overdueFilter: this.overdueFilter,
    });
  }
}
