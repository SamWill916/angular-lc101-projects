import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ["https://en.wikipedia.org/wiki/Rocko%27s_Modern_Life", "https://www.youtube.com/watch?v=OFxJDFodce4"]
  constructor() { }

  ngOnInit() {
  }

}
