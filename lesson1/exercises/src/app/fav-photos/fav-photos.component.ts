import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Best Friends to Watch With';
  image1 = 'https://upload.wikimedia.org/wikipedia/en/c/c9/Filburt_Shellbach.png';
  image2 = 'https://upload.wikimedia.org/wikipedia/en/1/1e/Ed_Bighead.png';
  image3 = 'https://upload.wikimedia.org/wikipedia/en/c/c8/Heffer_Wolfe.png';

  constructor() { }

  ngOnInit() {
  }

}