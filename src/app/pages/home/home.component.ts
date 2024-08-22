import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { GeneralModule } from '../../components/general/general.module';
import { ScriptService } from '../../services/script/script.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, GeneralModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public constructor(
    public scriptService: ScriptService
  ){
  }

  async ngOnInit(){
   this.scriptService.init();
  }

}
