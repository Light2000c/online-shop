import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GeneralModule } from '../../components/general/general.module';
import { ScriptService } from '../../services/script/script.service';

@Component({
  selector: 'app-admin-cart',
  standalone: true,
  imports: [CommonModule, GeneralModule],
  templateUrl: './admin-cart.component.html',
  styleUrl: './admin-cart.component.scss'
})
export class AdminCartComponent {

  constructor(
    public scriptService: ScriptService
  ){
  }

  ngOnInit(){
    this.scriptService.init("admin");
  }
}
