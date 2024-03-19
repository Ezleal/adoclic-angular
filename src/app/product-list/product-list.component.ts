// product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../interface/product.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailModalComponent } from '../product-detail-modal/product-detail-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'category','actions'];
  filteredProducts: Product[] = [];
  categories: string[] = [];
  itemsPerPageOptions = [5, 10, 15];
  itemsPerPage = 10;

  constructor(private productService: ProductService, private modalService: NgbModal, private dialog: MatDialog, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.filteredProducts = products;
      this.categories = Array.from(new Set(products.map(product => product.category)));
    });
  }

  openProductDetailModal(product: Product) {
    const modalRef = this.dialog.open(ProductDetailModalComponent, {
      width: '400px',
      data: product
    });
  }

  filterProductsByCategory(event: any) {
    const selectedCategory = event.value;
    selectedCategory === 'all' ?
    this.filteredProducts = this.products :
    this.filteredProducts = this.products.filter(product => product.category === selectedCategory);
  }

  limitProducts(event: any) {
    const selectedItemsPerPage = event.value;
    selectedItemsPerPage === 'all' ? this.itemsPerPage = this.products.length : this.itemsPerPage = selectedItemsPerPage;
  }

  logout() {
    this.authService.setAuthenticated(false);
    this.router.navigate(['/login']);
  }
}
