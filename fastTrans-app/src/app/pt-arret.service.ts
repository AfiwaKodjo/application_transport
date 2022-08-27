import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PtArret } from './pt-arret';

@Injectable({
  providedIn: 'root'
})
export class PtArretService {

  private baseURL = "http://localhost:6060/api/pt-arrets";

  constructor(private httpClient: HttpClient) { }

  getPtArrets():Observable<PtArret[]>{
   return this.httpClient.get<PtArret[]>(`${this.baseURL}`);
  }


}
