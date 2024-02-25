import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PersonService} from "../person.service";
import {PopupService} from "../popup.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router, private personService: PersonService, private popupService: PopupService) { }


  openObjectListPopup(): void {
    const persons = this.personService.getPersons();
    this.popupService.openObjectListPopup(persons);
  }
    ngOnInit(): void {
  }

}
