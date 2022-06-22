import { Component, OnInit } from '@angular/core';


import { LogoIntro, FadeInGrow, TextFadeInOut } from '../route-animations'

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  // TODO: Change back to ./content-page.component.css
  styleUrls: ['../data-collection-page/data-collection-page.component.css'],
  animations: [ LogoIntro, FadeInGrow, TextFadeInOut ]
})
export class ContentPageComponent implements OnInit {
  
  //TEMP TODO: REMOVE LATER
  bgImage = '../assets/img/hivis-brick-wall.png';
  artistImage = '../assets/img/uppbeat-image.png';
  artistName = 'uppbeat';

  spotifyLink = 'https://open.spotify.com/artist/3VymVJxAJTgqI3RouTkwMU?si=KVPcINV-QXGPyssMXEQvPw';
  instagramLink = 'https://instagram.com/uppbeat?utm_medium=copy_link';
  twitterLink = 'https://twitter.com/uppbeat_ireland?s=21';

  headerTitle = "You've made it this far...";
  headerSubTitle = ""; //TODO: Not currently implemented because of color change mid paragraph

  termsAndConditions = "#" //TODO: Update to live T&C link
  privacyPolicy = "#" //TODO: Update to live privacy policy link

  introPlayed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  logoIntroEnd(){
    this.introPlayed = true;
  }

}
