import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { throwError } from 'rxjs';

import { IntegriteFile } from '../models/file.models'

@Injectable()
export class ApiService {

  private apiUrl: string;
  private httpOptions: any;

  serverData: JSON;
  employeeData: JSON;


  constructor(public http: HttpClient) {
    this.apiUrl = environment.apiUrl;

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  sayHi() {
    return this.http.get('http://127.0.0.1:5000/');
       
     }
  
  getAllEmployees(){
      return this.http.get('http://127.0.0.1:5000/employees');
  }

getMasse(etablissement){
    return this.http.get('http://127.0.0.1:5000/masse?etablissement='+etablissement);
}

getaFlaguer(etablissement){
  return this.http.get('http://127.0.0.1:5000/aflaguer?etablissement='+etablissement)
}

getBPDetails(matricule){
  return this.http.get('http://127.0.0.1:5000/bulletin?matricule='+matricule)
}
  // Tableau de bord
getDashbordData(etablissement) {
    return this.http.get('http://127.0.0.1:5000/dashboard?etablissement='+etablissement)
  }

  // Contrôles d'intégrité
  getIntegrite(id: number) {
    return this.http.get(`${this.apiUrl}/getIntegrite?id=${id}`, this.httpOptions)
  }

  addIntegrite(file: IntegriteFile) {
    return this.http.post(`${this.apiUrl}/addIntegrite`, JSON.stringify(file), this.httpOptions)
  }

  deleteIntegrite(idArray: Array<number>, urlArray: Array<string>) {
    const json = {
      ids: idArray,
      urls: urlArray
    }

    return this.http.post(`${this.apiUrl}/deleteIntegrite`, JSON.stringify(json), this.httpOptions)
  }

  updateIntegrite(id: number, title: string) {
    const json = {
      id: id,
      title: title
    }

    return this.http.post(`${this.apiUrl}/updateIntegrite`, JSON.stringify(json), this.httpOptions)
  }

  // Rapports d'écarts
  getIds() {
    return this.http.get(`${this.apiUrl}/ids`, this.httpOptions)
  }

  generateReport(controle, urlArray) {
    const json = {
      controle: controle,
      urlArray: urlArray
    }

    return this.http.post(`${this.apiUrl}/report`, JSON.stringify(json), this.httpOptions)
  }

  // Paramètres
  getSettings() {
    return this.http.get(`${this.apiUrl}/settings`, this.httpOptions)
  }

  updateSettings(insertFilialeArray, deleteFilialeArray, insertFilePerFilialeArray, deleteFilePerFilialeArray) {
    const json = {
      deleteFilialeArray: deleteFilialeArray,
      insertFilialeArray: insertFilialeArray,
      deleteFilePerFilialeArray: deleteFilePerFilialeArray,
      insertFilePerFilialeArray: insertFilePerFilialeArray
    }

    return this.http.post(`${this.apiUrl}/updateSettings`, JSON.stringify(json), this.httpOptions)
  }

  // Rapports de paie
  rapportPaie(fileArray) {
    const json = {
      fileList: fileArray
    }

    return this.http.post(`${this.apiUrl}/rapportPaie`, JSON.stringify(json), this.httpOptions)
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    console.log('error', error);
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
