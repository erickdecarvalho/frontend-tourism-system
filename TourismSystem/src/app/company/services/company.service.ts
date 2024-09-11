import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from 'src/app/basic/services/storage/user-storage.service';

const BASIC_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  postTourism(tourismDTO: any): Observable<any> {
    const userId = UserStorageService.getUserId();
    return this.http.post(BASIC_URL + `api/companhias/turismo/${userId}`, tourismDTO, {
      headers : this.createAuthorizationHeader()
    })
  }

  getAllTourismsByUserId(): Observable<any> {
    const userId = UserStorageService.getUserId();
    return this.http.get(BASIC_URL + `api/companhias/turismos/${userId}`, {
      headers : this.createAuthorizationHeader()
    })
  }

  getTourismById(tourismId:any): Observable<any> {
    return this.http.get(BASIC_URL + `api/companhias/turismo/${tourismId}`, {
      headers : this.createAuthorizationHeader()
    })
  }

  updateTourism(tourismId:any, tourismDTO:any): Observable<any> {
    return this.http.put(BASIC_URL + `api/companhias/turismo/${tourismId}`, tourismDTO, {
      headers : this.createAuthorizationHeader()
    })
  }

  deleteTourism(tourismId:any): Observable<any> {
    return this.http.delete(BASIC_URL + `api/companhias/turismo/${tourismId}`, {
      headers : this.createAuthorizationHeader()
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
