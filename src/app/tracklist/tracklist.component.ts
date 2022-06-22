import { Component, OnInit } from '@angular/core';
import { SONGS } from '../mock-songs';
import { MatBottomSheet } from '@angular/material/bottom-sheet';




@Component({
  selector: 'app-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.css']
})
export class TracklistComponent implements OnInit {
  songs = SONGS;

  constructor() { }

  ngOnInit(): void {
  }

}

