import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css'],
})
export class ProductDeleteComponent implements OnInit {
  product: Product = {
    name: '',
    price: null,
  };

  id: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.productService
      .readById(this.id)
      .subscribe(product => (this.product = product));
  }

  deleteProduct(): void {
    this.productService.delete(this.id).subscribe(() => {
      this.productService.showMessage('Produto Deletado com Sucesso!');
      this.redirectToProducts();
    });
  }

  redirectToProducts(): void {
    this.router.navigate(['/products']);
  }
}
