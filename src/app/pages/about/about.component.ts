import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GeneralModule } from '../../components/general/general.module';
import { ScriptService } from '../../services/script/script.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, GeneralModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  constructor(
    public scriptService: ScriptService
  ){
  }

  ngOnInit(){
    this.scriptService.init();
  }
}
