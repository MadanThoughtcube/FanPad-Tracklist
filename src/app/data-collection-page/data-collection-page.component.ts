import { Component, OnInit } from '@angular/core';

//Phone input module
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchCountryField, CountryISO } from 'ngx-intl-tel-input';

//Animations
import { FadeSlideInOut } from '../route-animations';



@Component({
  selector: 'app-data-collection-page',
  templateUrl: './data-collection-page.component.html',
  styleUrls: ['./data-collection-page.component.css'],
  animations: [FadeSlideInOut],
})
export class DataCollectionPageComponent implements OnInit {

  // TODO: Add light/dark mode
  lightMode: boolean = true;


  //TODO: Create shared component that contains variables for links, images, etc.

  bgImage: String = '';
  bgColorFilter: String = 'rgb(44, 44, 44, 0)';
  bgTextColor: String = '';
  contentBoxColor: String = '';
  contentTextColor: String = '';

  artistImage: String = '';
  artistName: String = '';
  headerTitle: String = '';
  headerSubTitle: String = '';
  termsAndConditions: String = '';
  privacyPolicy: String = '';

  headerFontSize: string = '';

  // Artist Social Media Links
  spotifyLink: String ='';
  instagramLink: String ='';
  twitterLink: String ='';


  submitted: boolean = false;

  constructor() { }

  ngOnInit(): void {
    //Modify the page contents with these variables
    this.bgImage = '../assets/img/joey-burbach-background-gradient.png';
    this.artistImage = '../assets/img/joey-burbach.png';
    this.artistName = 'Joey Burbach';

    this.spotifyLink = 'https://open.spotify.com/artist/6RB4h3XIdZKL0v8jWM1Sk1?si=R__Tqz3xRKazifzYfI8j1g';
    this.instagramLink = 'https://www.instagram.com/joeyburbach/';
    this.twitterLink = 'https://twitter.com/JoeyBurbach?s=20&t=uyqJZeQcRXlrQ0z51N0r6g';

    this.headerTitle = "Sign up to get exclusive updates directly from me, including sneak previews and the ability to vote on my next NFT mint";
    this.headerSubTitle = ""; //TODO: Not currently implemented because of color change mid paragraph
    this.termsAndConditions = "#"; //TODO: Update to live T&C link
    this.privacyPolicy = "#"; //TODO: Update to live privacy policy link

    this.headerFontSize = "1.1em";
  }

  formSubmitted(eventData: {submitted: boolean}){
    console.log("Parent: Form submitted");
    this.submitted = eventData.submitted;
  }

  checkDarkMode(){
    if(this.lightMode){



    }else{

    }
  }

}
