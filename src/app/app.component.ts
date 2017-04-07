import { Component } from '@angular/core';

import { Artist } from './artist';

@Component({
  selector: 'aserv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aserv works!';
  artists: Artist[];

  constructor() {
    this.artists = [
      new Artist('miles'),
      new Artist('laura')
    ];
  }
}
