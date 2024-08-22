import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { ProductItemComponent } from '../product-item/product-item.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, HeaderComponent, AdminHeaderComponent, ProductItemComponent
  ],
  exports: [HeaderComponent, AdminHeaderComponent, ProductItemComponent]
})
export class GeneralModule { }
