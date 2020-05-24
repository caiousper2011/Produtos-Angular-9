import { Component, OnInit } from '@angular/core';
import { HeaderDataService } from './header-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private headerDataService: HeaderDataService) {}

  ngOnInit(): void {}

  get title(): string {
    return this.headerDataService.headerData.title;
  }

  get icon(): string {
    return this.headerDataService.headerData.icon;
  }

  get routeUrl(): string {
    return this.headerDataService.headerData.routeUrl;
  }
}
