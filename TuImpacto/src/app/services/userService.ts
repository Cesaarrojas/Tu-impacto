import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../models/userModel';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor(private http: HttpClient) {}

    getAll(pageSize: number, keyPage: number) {
      return this.http.get<User[]>(`${environment.impactoUrl.api_url}/`, {
        params: {
          pageSize: (pageSize || 10).toString(),
          keyPage: (keyPage || 1).toString()
        }
      })
      .toPromise();
    }

    getById(id: string) {
      return this.http.get<User>(`${environment.impactoUrl.api_url}/${id}`).toPromise();
    }

    create(usuario: User) {
      return this.http.post<User>(`${environment.impactoUrl.api_url}`, usuario).toPromise();
    }

    update(usuario: User) {
      return this.http.put<any>(`${environment.impactoUrl.api_url}/${usuario._id}`, usuario).toPromise()
      .then(result => result);
    }

    delete(id: string) {
      return this.http.delete<any>(`${environment.impactoUrl.api_url}/${id}`).toPromise()
    }

    getByMail(email: string) {
      return this.http.get<User>(`${environment.emailUrl.url}`, {
        params: {
          email: (email || "inge.eromero@this.getByMail.com").toString()
        }
      })
      .toPromise();
    }
}