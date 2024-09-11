import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from 'src/app/basic/services/storage/user-storage.service';

const BASIC_URL = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllTourisms(): Observable<any> {
    return this.http.get(BASIC_URL + 'api/clientes/turismos', {
      headers: this.createAuthorizationHeader()
    })
  }

  searchTourismByName(name:any): Observable<any> {
    return this.http.get(BASIC_URL + `api/clientes/turismos/procurar/${name}`, {
      headers: this.createAuthorizationHeader()
    })
  }

  createAuthorizationHeader(): HttpHeaders {
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      'Authorization',
      'Bearer ' + UserStorageService.getToken()
    )
  }
}
