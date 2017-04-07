import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Artist } from './artist';

@Injectable()
export class ArtistService {
  private selectedArtist = new Subject<Artist>();

  getSelectedArtist() {
    return this.selectedArtist.asObservable();
  }

  setSelectedArtist(artist: Artist) {
    this.selectedArtist.next(artist);
  }

  getArtists() {
    return [
      new Artist('miles'),
      new Artist('laura')
    ]
  }
}
