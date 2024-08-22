import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GeneralModule } from '../../components/general/general.module';
import { ScriptService } from '../../services/script/script.service';

@Component({
  selector: 'app-admin-transaction',
  standalone: true,
  imports: [CommonModule, GeneralModule],
  templateUrl: './admin-transaction.component.html',
  styleUrl: './admin-transaction.component.scss'
})
export class AdminTransactionComponent {

  constructor(
    public scriptService: ScriptService
  ){}

  ngOnInit(){
    this.scriptService.init("admin");
  }
}
