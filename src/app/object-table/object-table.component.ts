import { Component, OnInit } from '@angular/core';
import { Object } from '../object.model';
import { PersonService } from '../person.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-object-table',
  templateUrl: './object-table.component.html',
  styleUrls: ['./object-table.component.css'],
})
export class ObjectTableComponent implements OnInit {
  persons: Object[] = [];
  filteredPersons: Object[] = [];
  filterName = '';
  filterState = '';

  constructor(private personService: PersonService, private router: Router) {}

  viewDetails(person: Object): void {
    // Navigate to the detailed view with the person's ID
    this.router.navigate(['/info-about', person.id]);
  }
  ngOnInit(): void {
    this.persons = this.personService.getPersons();
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredPersons = this.persons.filter(
      (person) =>
        person.name.toLowerCase().includes(this.filterName.toLowerCase()) &&
        person.state.toLowerCase().includes(this.filterState.toLowerCase())
    );
  }

}
