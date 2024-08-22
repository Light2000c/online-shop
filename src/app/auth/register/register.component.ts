import { Component } from '@angular/core';
import { ScriptService } from '../../services/script/script.service';
import { CommonModule } from '@angular/common';
import { GeneralModule } from '../../components/general/general.module';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, GeneralModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(
    public scriptService: ScriptService
  ){
  }

  ngOnInit(){
    this.scriptService.init();
  }
}
