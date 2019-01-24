import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FetchTodosService {
  constructor(
    private $http: HttpClient) { }

  fetchTodos() {
    return this.$http.get('http://localhost:3000/todos')
      .toPromise()
  }
}
