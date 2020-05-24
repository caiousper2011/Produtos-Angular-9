import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header-data.model';

@Injectable({
  providedIn: 'root',
})
export class HeaderDataService {
  private headerDataObject = new BehaviorSubject<HeaderData>({
    title: 'Início',
    icon: 'home',
    routeUrl: '',
  });

  constructor() {}

  get headerData(): HeaderData {
    return this.headerDataObject.value;
  }

  set headerData(headerData: HeaderData) {
    this.headerDataObject.next(headerData);
  }
}
