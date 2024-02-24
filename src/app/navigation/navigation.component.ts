import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }
  goToInfoTextImg(): void {
    this.router.navigate(['/info-text-img']);
  }
    ngOnInit(): void {
  }

}
