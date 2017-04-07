import { Injectable } from '@angular/core';

import { Artist } from './artist';

@Injectable()
export class ArtistService {

  getArtists() {
    return [
      new Artist('miles'),
      new Artist('laura')
    ]
  }
}
