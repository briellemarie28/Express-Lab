import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
apiUrl = 'https://www.reddit.com/r/aww/.json'
constructor(private http: HttpClient) { }
getReddit() {
  return this.http.get((`${this.apiUrl}`));
}
}

