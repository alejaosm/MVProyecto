import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-comics',
  templateUrl: './dialog-comics.component.html',
  styleUrls: ['./dialog-comics.component.css']
})
export class DialogComicsComponent implements OnInit {
  dataItem: any; 

  constructor(public dialogRef: MatDialogRef<DialogComicsComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {
    this.dataItem = this.data;
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
