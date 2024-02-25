import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ObjectListPopupComponent } from './object-list-popup/object-list-popup.component';
import { Object } from './object.model';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor(private dialog: MatDialog) {}

  openObjectListPopup(objects: Object[]): void {
    this.dialog.open(ObjectListPopupComponent, {
      data: objects,
      width: '400px',
    });
  }
}
