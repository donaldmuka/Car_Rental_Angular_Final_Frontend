import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Check if the request URL matches the Google Places API URL
    if (req.url.includes('maps/api/place/autocomplete/json')) {
      // Skip interceptor logic for Google Places API requests
      return next.handle(req);
    }

    // For other requests, add headers and credentials as usual
    const authReq = req.clone({
      setHeaders: {
        // Add any headers if needed
      },
      withCredentials: true
    });

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 0 || error.status === 302) {
          sessionStorage.clear();
          this.router.navigate(['homepage']);
        }
        return throwError(error);
      })
    );
  }
}