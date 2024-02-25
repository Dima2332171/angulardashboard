import { Injectable } from '@angular/core';
import {Object} from "./object.model";
@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private persons: Object[] = [
    { id: 1, name: 'John Doe', state: 'NY', age: 21 },
    { id: 2, name: 'Jane Smith', state: 'Kyiv', age: 23 },
    { id: 3, name: 'Dima Shkoda', state: 'Lviv', age: 31 },
    { id: 4, name: 'Julian Greyt', state: 'London', age: 25 },
    { id: 5, name: 'Magdan Mod', state: 'London', age: 26 },
    { id: 6, name: 'Aislan Vods', state: 'Kharkiv', age: 18 },
    { id: 7, name: 'Jasmime Froyd', state: 'Odessa', age: 54 },
    { id: 8, name: 'OLia Nester', state: 'Chayka', age: 43 },
    { id: 9, name: 'Tania Kirakosian', state: 'Ghlevaha', age: 33 },
    { id: 10, name: 'Masha Goladan', state: 'Irpin', age: 41 },
    { id: 11, name: 'Masha Goladan', state: 'Gdansk', age: 22 },
    { id: 12, name: 'Masha Goladan', state: 'Mariupol', age: 24 },
    { id: 13, name: 'Masha Goladan', state: 'Warshawa', age: 65 },
    { id: 14, name: 'Masha Goladan', state: 'Mdrid', age: 53 },
    { id: 15, name: 'Masha Goladan', state: 'Donezk', age: 46 },
    { id: 16, name: 'Masha Goladan', state: 'NY', age: 40 },
    { id: 17, name: 'Masha Goladan', state: 'Irpin', age: 51 },
  ];

  getPersons(): Object[] {
    return this.persons;
  }
}
