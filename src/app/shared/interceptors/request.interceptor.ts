import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
import { Observable } from 'rxjs';

import { host, key } from '../../../environments/api';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const newRequest = request.clone({
        url: `${host}/${request.url}`,
        setParams: {
          'api_key': key
        }
      });

    return next.handle(newRequest);
  }
}