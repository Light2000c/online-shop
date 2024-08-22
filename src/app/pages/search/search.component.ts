import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GeneralModule } from '../../components/general/general.module';
import { ScriptService } from '../../services/script/script.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, GeneralModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  constructor(
    public scriptService: ScriptService
  ){}

  ngOnInit(){
    this.scriptService.init();
  }
}
