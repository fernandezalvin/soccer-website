import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerPerfService {
  private API_KEY = 'c2076e3abd5d45c8a599c71e210c12bb';
  private URL = 'https://api.football-data.org/v2/';

  private httpOptions = {
    headers: new HttpHeaders({
      'X-Auth-Token': this.API_KEY
    })
  };

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  public getPlayerPerformance() {
    return this.http.get(this.URL + 'teams/81', this.httpOptions).pipe(
      map(this.extractData));
  }

  public getScorers() {
    return this.http.get(this.URL + 'competitions/2014/scorers?limit=300', this.httpOptions).pipe(
      map(this.extractData));
  }

}
