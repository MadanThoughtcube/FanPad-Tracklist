import { Component, OnInit, Input } from '@angular/core';

import { FadeInGrow } from '../route-animations'

@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.css'],
  animations:[FadeInGrow]
})
export class ContentBoxComponent implements OnInit {

  @Input() boxTitle: String = '';
  @Input() embedLink: String = '';

  constructor() { }

  ngOnInit(): void {
    // this.boxTitle = "Why you're here";
  }

}
