import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

export interface Category {
  id: number;
  name: string;
  description: string;
  hostCount: number;
  testCount: number;
}

@Injectable()
export class CategoriesServiceService {

  private BASE_URL:string = "http://localhost:8080/commander/service";

  constructor(private http: HttpClient) { }

  public getCategories():Observable<Category[]> {
    let retval: Observable<Category[]> = null;
    retval = this.http.get(this.BASE_URL + "/categories");
    return retval;
  }
}
