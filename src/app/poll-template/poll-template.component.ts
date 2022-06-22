import { Component, OnInit } from '@angular/core';
import { FadeSlideInOut, LogoIntro, TextFadeInOut } from '../route-animations';

@Component({
  selector: 'app-poll-template',
  templateUrl: './poll-template.component.html',
  styleUrls: ['./poll-template.component.css'],
  animations:[ LogoIntro, FadeSlideInOut, TextFadeInOut]
})
export class PollTemplateComponent implements OnInit {

  pollItems: Array<{id: number, name: string, votes: number, percent:number }>;
  totalVotes: number;

  voteSubmitted = false;

  introPlayed: boolean = false;

  artistName = "Joey Burbach"
  artistImage = "../../assets/img/joey-burbach.png"

  testLink = "https%3A//api.soundcloud.com/tracks/1237587943";

  constructor() { 

    // JSON Array containing the voting option data
    this.pollItems=[
      {id:1, name:'If I Have To Ask', votes:0, percent:0},
      {id:2, name:'Off Your Mind', votes:0, percent:0},
      {id:3, name:'No Winter Lasts Forever', votes:0, percent:0},
    ]

    //TODO: Maybe create a JSON array for the entire poll (including all questions) and track the total votes in that array
    this.totalVotes = 0;

  }

  ngOnInit(): void {
  }

  /* Calculates the percentage of votes per song and updates the data array
  *  TODO: Integrate with backend code to read/write this data
  */
  onVote(event: Event, ){

    const selectedElementId: string = (event.target as Element).id;
    const idSplit = selectedElementId.split('-');
    const idNum = Number(idSplit[1]);

    this.totalVotes++;

    this.pollItems.forEach(element => {

      let percentage = 0;
      if(element.id === idNum){
        this.pollItems[element.id-1].votes++;
      }
      percentage = Math.round((this.pollItems[element.id-1].votes * 100) / (this.totalVotes));
      this.pollItems[element.id-1].percent = percentage;
    });
    this.voteSubmitted = true;

    document.getElementById('page-end')?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  logoIntroEnd(){
    this.introPlayed = true;
  }

}
