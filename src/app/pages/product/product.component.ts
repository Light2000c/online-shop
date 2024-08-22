import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GeneralModule } from '../../components/general/general.module';
import { ScriptService } from '../../services/script/script.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, GeneralModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  constructor(
    public scriptService: ScriptService
  ){

  }

  ngOnInit(){
   this.scriptService.init();
  }
}
