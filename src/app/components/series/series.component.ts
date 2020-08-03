import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/Series/series.service';
import swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { DialogSeriesComponent } from '../dialog-series/dialog-series.component';
import { Result } from 'src/app/models/Comics';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private _SerieService: SeriesService,public dialog: MatDialog) { }

  allSeries: Result[];
  
  
  ngOnInit() {
    this.getData();
  }

  getData(){
    swal.fire({
      title: 'Cargando...',
      allowOutsideClick: false,
      timer: 5000,
      background: '#fff',
      backdrop: `rgba(0,0,123,0.4) url("../assets/images/capitan.gif") left top no-repeat `,
      onOpen: () => {
        swal.showLoading()
      }
    });

    this._SerieService.getAllSeries().subscribe(data=>{
      this.allSeries = data.data.results;
    });
    
  }

  openDialog(event, data){
    const dialogRef = this.dialog.open(DialogSeriesComponent, {
      width: '550px',
      data: { data}
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  
}

