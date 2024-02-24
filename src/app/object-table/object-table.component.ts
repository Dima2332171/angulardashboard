import { Component, OnInit } from '@angular/core';
import { Object } from '../object.model';
import { PersonService } from '../person.service';


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

  constructor(private personService: PersonService) {}

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
