import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Object } from '../object.model';

@Component({
  selector: 'app-object-list-popup',
  templateUrl: './object-list-popup.component.html',
  styleUrls: ['./object-list-popup.component.css'],
})
export class ObjectListPopupComponent {
  constructor(
    public dialogRef: MatDialogRef<ObjectListPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Object[]
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
