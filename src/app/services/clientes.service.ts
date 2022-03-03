import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {Client} from "../models/client";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  baseUrl: string = "https://barrosback.herokuapp.com/";
  private _result: any;

  constructor(
    private http: HttpClient
  ) {
  }

  getAllClients() {
    return this.http.get<Observable<Client[]>>(this.baseUrl + 'listAllClients').pipe(
      catchError(this.handleError('get', []))
    );
  }

  private handleError(operation = 'operation', result?: any) {
    this._result = result;
    return (error: any): any[] => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return [];
    }
  }
}
