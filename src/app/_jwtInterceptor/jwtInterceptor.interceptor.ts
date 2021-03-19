import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  intercept(request:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {
    if(request.url=="http://localhost:8000/v2/rest-auth/login/"){

      return next.handle(request);
    }
    let jwt = JSON.parse(sessionStorage.getItem('jwt'));


    if (jwt) {

      request = request.clone({
        setHeaders: {
          Authorization: `JWT ` + jwt.token

        }
      });
    }
    return next.handle(request);
  }
}
