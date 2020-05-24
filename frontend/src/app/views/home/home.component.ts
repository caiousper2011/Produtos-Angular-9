import { Component, OnInit } from '@angular/core';
import { HeaderDataService } from '../../components/template/header/header-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private headerDataService: HeaderDataService) {
    this.headerDataService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: '',
    };
  }

  ngOnInit(): void {}
}
