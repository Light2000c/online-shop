import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GeneralModule } from '../../components/general/general.module';
import { ScriptService } from '../../services/script/script.service';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, GeneralModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {

  constructor(
    public scriptService: ScriptService
  ){
  }

  ngOnInit(){
    this.scriptService.init();
  }
}
