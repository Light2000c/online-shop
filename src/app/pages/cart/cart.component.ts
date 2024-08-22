import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GeneralModule } from '../../components/general/general.module';
import { ScriptService } from '../../services/script/script.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, GeneralModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  constructor(
    public scriptService: ScriptService
  ){

  }

  ngOnInt(){
    this.scriptService.init();
  }
}
