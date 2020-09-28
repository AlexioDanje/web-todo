import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const baseUrl = 'http://localhost:8080/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Object> {
    return this.http.get(baseUrl + '/all');
  }

  get(id): Observable<Object> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data): Observable<Object> {
    return this.http.post(baseUrl + '/create', data);
  }

  update(id, data): Observable<Object> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id): Observable<Object> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<Object> {
    return this.http.delete(baseUrl + '/delete');
  }

  findByTitle(title): Observable<Object> {
    return this.http.get(`${baseUrl}/${title}`);
  }

}
