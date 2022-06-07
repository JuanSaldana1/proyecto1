/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Client } from '../models/client';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private _result: any;

  constructor(private http: HttpClient) {}

  getAllClients() {
    return this.http
        .get<Observable<Client[]>>(environment.baseUrl + 'client/getAll')
        .pipe(catchError(this.handleError('get', [])));
  }

  private handleError(operation = 'operation', result?: any) {
    this._result = result;
    return (error: any): any[] => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return [];
    };
  }
}
