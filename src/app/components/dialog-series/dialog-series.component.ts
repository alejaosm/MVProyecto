import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-series',
  templateUrl: './dialog-series.component.html',
  styleUrls: ['./dialog-series.component.css']
})
export class DialogSeriesComponent implements OnInit {
  dataItem: any; 
  constructor( public dialogRef: MatDialogRef<DialogSeriesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.dataItem = this.data;
    }

  ngOnInit() {
  
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

}



