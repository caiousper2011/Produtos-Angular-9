import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderDataService } from '../../components/template/header/header-data.service';
@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css'],
})
export class ProductCrudComponent implements OnInit {
  constructor(
    private router: Router,
    private headerDataService: HeaderDataService,
  ) {
    this.headerDataService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/products',
    };
  }

  ngOnInit(): void {}

  navigateToProductCreate(): void {
    this.router.navigate(['products/create']);
  }
}
