import { Injectable } from '@angular/core';
import { SearchObject } from '../model/SearchObject';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
private searchObject: SearchObject=new SearchObject();

  setSearchObject(obj: any) {
    this.searchObject = obj;
  }

  getSearchObject() {
    return this.searchObject;
  }
}