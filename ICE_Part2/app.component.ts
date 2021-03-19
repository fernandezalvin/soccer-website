import { Component } from '@angular/core';
import { MainApiService } from './main-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'La Liga Santander League';
  footer = "Created by Alvin Fernandez (19623175) and Mohammad Omar Salauddin (19244977)";
  crest;

  constructor(private api: MainApiService) { }

  ngOnInit() {
    this.getCrest();
  }

  getCrest() {
    this.api.getCrest().subscribe((data) => {
      this.crest = data;
      this.crest = Array.of(this.crest);
    });
  }
}
