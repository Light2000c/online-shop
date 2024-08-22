import { Component } from '@angular/core';
import { ScriptService } from '../../services/script/script.service';
import { GeneralModule } from '../../components/general/general.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,GeneralModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    public scriptService: ScriptService
  ){
  }

  ngOnInit(){
    this.scriptService.init();
  }
}
