import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  // constructor(private http: HttpClient) {}

  addData = (body: any) => {
    console.log(body);
    // set this in localStorage for the readData operation
    localStorage.setItem('DATA', body);
    console.log('Local Storage data set');
  };

  readData = () => {
    localStorage.getItem('DATA');
    console.log('Data fetched');
  };

  deleteData = () => {
    localStorage.clear();
    console.log('DATA cleared');
  };
}