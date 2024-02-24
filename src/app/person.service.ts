import { Injectable } from '@angular/core';
import {Object} from "../app/object.model";
@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private persons: Object[] = [
    { id: 1, name: 'John Doe', state: 'NY', age: 21 },
    { id: 2, name: 'Jane Smith', state: 'CA', age: 21 },
    { id: 3, name: 'Dima Shkoda', state: 'CA', age: 21 },
    { id: 4, name: 'Julian Greyt', state: 'CA', age: 21 },
    { id: 5, name: 'Magdan Mod', state: 'CA', age: 21 },
    { id: 6, name: 'Aislan Vods', state: 'CA', age: 21 },
    { id: 7, name: 'Jasmime Froyd', state: 'CA', age: 21 },
    { id: 8, name: 'OLia Nester', state: 'CA', age: 21 },
    { id: 9, name: 'Tania Kirakosian', state: 'CA', age: 21 },
    { id: 10, name: 'Masha Goladan', state: 'CA', age: 21 },
  ];

  getPersons(): Object[] {
    return this.persons;
  }
}
