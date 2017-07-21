import {Component, OnInit} from '@angular/core';
import {SpotifyService} from "../shared/spotify/angular2-spotify";

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {
  public featuredPlaylists: any;

  constructor(public spotifyService: SpotifyService) {
  }

  ngOnInit() {
    this.getFeatured();
  }

  getFeatured() {
    this.spotifyService.getFeaturedPlaylists().subscribe(
      data => {
        console.log(data);
        this.featuredPlaylists = data;
      },
      error => {
        console.log(error);
      }
    )
  }
}