import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Artist } from './artist';
import { ArtistService } from './artist.service';

@Component({
  selector: 'aserv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  artists: Artist[];
  selectedArtist: Artist;
  artistService: ArtistService;
  subscription: Subscription;

  constructor(private _artistService: ArtistService) {
    this.artistService = _artistService;
  }

  ngOnInit() {
    this.artists = this.artistService.getArtists();
    this.subscription = this.artistService.getSelectedArtist().subscribe(
      (artist: Artist) => { this.selectedArtist = artist; }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); // ensures no memory leaks
  }

  setArtist(artist: Artist) {
    this.artistService.setSelectedArtist(artist);
  }
}
