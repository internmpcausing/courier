import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import * as Rx from "rxjs/Rx"
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private http:HttpClient) { }

  isLoggedIn(router: Router, url, resolve){
    router.config = [];
    // router.config.unshift({ path: '', loadChildren: 'app/users/client/client.module#ClientModule' });
    router.config.unshift({ path: '', loadChildren: 'app/users/admin/admin.module#AdminModule' });
    router.navigate([url]);
    resolve(false);
  }
}
