import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GeneralModule } from '../../components/general/general.module';
import { ScriptService } from '../../services/script/script.service';

@Component({
  selector: 'app-admin-product',
  standalone: true,
  imports: [CommonModule, GeneralModule],
  templateUrl: './admin-product.component.html',
  styleUrl: './admin-product.component.scss'
})
export class AdminProductComponent {

  constructor(
    public scriptService: ScriptService
  ){}


  ngOnInit(){
    this.scriptService.init("admin");
  }
}
