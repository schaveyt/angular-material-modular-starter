import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { ElementTableApi } from '../entities/element-table-api.model';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  readonly payloadStr = 'payload';
  constructor(private http: HttpClient) {}

  public findElements(
    sortColName = '',
    sortDirection = 'asc',
    pageNumber = 0,
    pageSize = 3,
    filter = ''
  ): Observable<ElementTableApi> {

    // use mock data for now.
    return this.http.get<ElementTableApi>(environment.urlBaseAddress, {
      params: new HttpParams()
        .set('_sort', sortColName)
        .set('_order', sortDirection)
        .set('_page', pageNumber.toString())
        .set('_limit', pageSize.toString())
    });

    // Eventual url query.
    // return this.http.get<ElementTableApi>(environment.urlBaseAddress, {
    //     params: new HttpParams()
    //       .set('elementId', elementId.toString())
    //       .set('filter', filter)
    //       .set('sortOrder', sortDirection)
    //       .set('pageNumber', pageNumber.toString())
    //       .set('pageSize', pageSize.toString())
    //   });
  }
}
