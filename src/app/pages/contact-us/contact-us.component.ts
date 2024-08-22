import { Component } from '@angular/core';
import { ScriptService } from '../../services/script/script.service';
import { CommonModule } from '@angular/common';
import { GeneralModule } from '../../components/general/general.module';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, GeneralModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

  constructor(
    public scriptService: ScriptService
  ){
  }

  ngOnInit(){
    this.scriptService.init();
  }
}
