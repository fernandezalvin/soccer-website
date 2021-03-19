import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllGameResService {

    private API_KEY = '066cc2675dde4a13b9d8c6daf973ab83';
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

    public getAllGameRes() {

      // Do not put the v2 bit in the url its already there
      // Do not put the {id} in the url it wont work, replace it with a number
      
      return this.http.get(this.URL + 'competitions/2014/matches?status=FINISHED', this.httpOptions).pipe(
      map(this.extractData));
    }

}
