import { Component, OnInit, TemplateRef } from '@angular/core';
import { ComicsService } from 'src/app/services/comics/comics.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import swal from 'sweetalert2';
import { Result } from 'src/app/models/Comics';
import { DialogComicsComponent } from '../dialog-comics/dialog-comics.component';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  constructor(private _ComicService: ComicsService,private dialog: MatDialog,) { }
  allComics: Result[];
  ngOnInit() {
    this.getData('');
  }

 
 
 
  openDialog(event, data){
    const dialogRef = this.dialog.open(DialogComicsComponent, {
      data: { data}
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  
  getData(termino:string){
    swal.fire({
      title: 'Cargando...',
      allowOutsideClick: false,
      timer: 5000,
      background: '#fff',
      backdrop: `rgba(0,0,123,0.4) url("../assets/images/iron.gif") left top no-repeat `,
      onOpen: () => {
        swal.showLoading()
      }
    });
   
    this._ComicService.getAllComics().subscribe(data=>{
      this.allComics = data.data.results.filter(x=> termino == '' || x.title.includes(termino));
      // this.allCharacters = data.data.results.filter(x=> x.id == 1994);
      // console.log(this.allComics); 
    });
  }

}


