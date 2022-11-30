import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export class HttpService {
  APIurl: string;
  serviceUrl: string;

  constructor(private httpClient: HttpClient) {

  }

  get(props: any, serviceUrl: string): Observable<any> {
    let data = new HttpParams(props);

    return this.httpClient.get(this.APIurl + this.serviceUrl, {

    });

  }

  post(props: any, serviceUrl: string): Observable<any> {
    let data = new HttpParams(props);

    return this.httpClient.post(this.APIurl + this.serviceUrl, {

    });

  }

  delete(props: any, serviceUrl: string): Observable<any> {
    let data = new HttpParams(props);

    return this.httpClient.delete(this.APIurl + this.serviceUrl, {

    });

  }





}
