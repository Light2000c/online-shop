import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GeneralModule } from '../general/general.module';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {

  @Input() condition: string | undefined;
}
