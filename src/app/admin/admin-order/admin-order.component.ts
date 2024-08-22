import { Component } from '@angular/core';
import { ScriptService } from '../../services/script/script.service';
import { CommonModule } from '@angular/common';
import { GeneralModule } from '../../components/general/general.module';

@Component({
  selector: 'app-admin-order',
  standalone: true,
  imports: [CommonModule, GeneralModule],
  templateUrl: './admin-order.component.html',
  styleUrl: './admin-order.component.scss'
})
export class AdminOrderComponent {

  constructor(
    public scriptService: ScriptService,
  ){}

  ngOnInit(){
    this.scriptService.init("admin");
  }
}
