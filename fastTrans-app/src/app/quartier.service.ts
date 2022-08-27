import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quartier } from './quartier';

@Injectable({
  providedIn: 'root'
})
export class QuartierService {

  private baseURL = "http://localhost:6060/api/quartiers";

  private URL = "http://localhost:6060/api/quartiers/post";


  constructor(private httpClient: HttpClient) { }

  getQuartiersList(): Observable<Quartier[]>{
    return this.httpClient.get<Quartier[]>(`${this.baseURL}`);
  }

  createQuartier(data: any){
    return this.httpClient.post<any>(`${this.URL}`,data);
  }
  
}
