import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../interface/product.interface';

@Component({
  selector: 'app-product-detail-modal',
  templateUrl: './product-detail-modal.component.html',
  styleUrls: ['./product-detail-modal.component.css']
})
export class ProductDetailModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ProductDetailModalComponent>,
    @Inject(MAT_DIALOG_DATA) public product: Product
  ) {}

  closeModal(): void {
    this.dialogRef.close();
  }
}
