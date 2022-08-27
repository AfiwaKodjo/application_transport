import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ligne } from './ligne';

@Injectable({
  providedIn: 'root'
})
export class LigneService {

  private baseURL = "http://localhost:6060/api/lignes";

  constructor(private httpClient: HttpClient) { }

  getLignes():Observable<Ligne[]>{
    return this.httpClient.get<Ligne[]>(`${this.baseURL}`);
  }

  getLigneById(id: number): Observable<Ligne>{
    return this.httpClient.get<Ligne>(`${this.baseURL}/${id}/get`);
  }



}
