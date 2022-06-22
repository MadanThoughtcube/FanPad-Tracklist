import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { LinksComponent } from '../links/links.component';
import { MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-bottomsheet',
  templateUrl: './bottomsheet.component.html',
  styleUrls: ['./bottomsheet.component.css']
})
export class BottomsheetComponent implements OnInit {

  constructor(private matBottomSheet: MatBottomSheet) { }

  onTriggerSheetClick(){
    this.matBottomSheet.open(LinksComponent);
  }

  ngOnInit(): void {
  }

}
