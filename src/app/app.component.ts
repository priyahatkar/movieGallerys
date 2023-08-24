import { Component } from '@angular/core';
import { Imovie } from './shared/models/movies';
import { movie } from './shared/const/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movieGallery';
  public movieArray : Array<Imovie> = movie;
  public searchByMovie !: string;
  
}
