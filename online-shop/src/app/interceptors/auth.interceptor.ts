import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { tokenKey } from '../modules/shared/types/token-key.constant';
import { NavigationService } from '../services/navigation.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private navigationService: NavigationService) { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        const token = localStorage.getItem(tokenKey);

        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                },
            });
        }

        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    this.navigationService.navigateToLogin();
                }
                return throwError(() => error);
            })
        );
    }
}
