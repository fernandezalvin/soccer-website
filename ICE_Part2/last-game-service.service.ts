import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LastGameServiceService {
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

  public getLastGame() {
    return this.http.get(this.URL + 'competitions/2014/matches', this.httpOptions).pipe(
    map(this.extractData));
  }

  public getDate() {
    var today = new Date();
    var dd = (today.getDate() - 1).toString();
    var mm = (today.getMonth() + 1).toString();
    var yyyy = today.getFullYear().toString();
    (dd.length == 1) && (dd = '0' + dd);
    (mm.length == 1) && (mm = '0' + mm);

    return yyyy + '-' + mm + '-' + dd;;
  }


}
