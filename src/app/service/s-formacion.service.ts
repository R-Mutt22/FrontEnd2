import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroments.prod';
import { Formacion } from '../model/formacion';

@Injectable({
  providedIn: 'root'
})
export class SFormacionService {

  expURL: string = environment.apiUrl + "formacion/";

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Formacion[]>{
    return this.httpClient.get<Formacion[]>(this.expURL + 'lista');
  }
 
  public detail(id:number): Observable<Formacion> {
    return this.httpClient.get<Formacion>(this.expURL + `detail/${id}`);
  }

  public save(formacion: Formacion): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', formacion);
  }

  public update(id: number, formacion: Formacion): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, formacion);
  }

  public detele(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}
