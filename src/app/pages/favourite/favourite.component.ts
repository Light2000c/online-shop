import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GeneralModule } from '../../components/general/general.module';
import { ScriptService } from '../../services/script/script.service';

@Component({
  selector: 'app-favourite',
  standalone: true,
  imports: [CommonModule, GeneralModule],
  templateUrl: './favourite.component.html',
  styleUrl: './favourite.component.scss'
})
export class FavouriteComponent {

  constructor(
    public scriptService: ScriptService
  ) {
  }

  ngOnInit() {
    this.scriptService.init();
  }

}
