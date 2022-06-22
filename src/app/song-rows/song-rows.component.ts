import { Component, OnInit } from '@angular/core';
import { Song } from '../songs';
import { SONGS } from '../mock-songs';
import { MatDialog } from '@angular/material/dialog'
import { InputFormComponent } from '../input-form/input-form.component';
import { PopuplinkComponent } from '../popuplink/popuplink.component';





@Component({
  selector: 'app-song-rows',
  templateUrl: './song-rows.component.html',
  styleUrls: ['./song-rows.component.css']
})


export class SongRowsComponent implements OnInit {
  songs=SONGS;
  


  constructor(private dialogRef : MatDialog) { }

  openDialog(){
    this.dialogRef.open(InputFormComponent);
  }

  openDialogLinks(){
    this.dialogRef.open(PopuplinkComponent)
  }

  ngOnInit(): void {
  }

}
