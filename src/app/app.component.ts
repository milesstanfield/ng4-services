import { Component } from '@angular/core';

import { Artist } from './artist';
import { ArtistService } from './artist.service';

@Component({
  selector: 'aserv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aserv works!';
  artists: Artist[];

  constructor(private artistService: ArtistService) {
    this.artists = artistService.getArtists();
  }
}
