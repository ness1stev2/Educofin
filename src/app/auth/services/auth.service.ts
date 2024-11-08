import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of, throwError } from 'rxjs';

import { environment } from 'src/environments/environments';
import { User, AuthStatus, LoginResponse, CheckTokenResponse } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class AuthService {

  // readonly sirve para que incluso estando en el mismo servicio nadie lo va a poder editar
  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);

  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking)

  //! Al mundo exterior (fuera de este archivo)
  public currentUser = computed(() => this._currentUser())
  public authStatus = computed(() => this._authStatus())
  public user: User = {
    _id: "",
    email: "",
    name: "",
    apellidos: "",
    nSocio: 0,
    isActive: true,
    roles: []
  }

  constructor() {
    this.checkAuthStatus().subscribe();
  }

  private setAuthentication(user: User, token: string): boolean {

    this._currentUser.set(user);
    this._authStatus.set(AuthStatus.authenticated);
    localStorage.setItem('token', token)
    this.user = user

    return true
  }



  register(user: User): Observable<boolean> {
    const url = `${this.baseUrl}/users/register`;

    return this.http.post<LoginResponse>(url, user)
      .pipe(
        map(({ user, token }) => this.setAuthentication(user, token)),
        catchError(err => throwError(() => err.error.message))
      )
  }

  login(email: string, password: string): Observable<boolean> {

    const url = `${this.baseUrl}/users/login`;
    console.log(url)
    const body = { email, password };

    return this.http.post<LoginResponse>(url, body)
      .pipe(
        map(({ user, token }) => this.setAuthentication(user, token)),
        catchError(err => throwError(() => err.error.message))
      )

  }

  checkAuthStatus(): Observable<boolean> {

    const url = `${this.baseUrl}/users/check-token`;
    const token = localStorage.getItem('token');

    if (!token) {
      this.logout();
      return of(false)
    }
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    return this.http.get<CheckTokenResponse>(url, { headers })
      .pipe(
        map(({ user, token }) => this.setAuthentication(user, token)),
        catchError(() => {
          this._authStatus.set(AuthStatus.notAuthenticated)
          return of(false)
        })
      );
  }

  logout() {
    localStorage.removeItem('token')
    this._currentUser.set(null);
    this._authStatus.set(AuthStatus.notAuthenticated)
  }

}
