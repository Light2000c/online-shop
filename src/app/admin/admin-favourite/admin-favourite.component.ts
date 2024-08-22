import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GeneralModule } from '../../components/general/general.module';
import { ScriptService } from '../../services/script/script.service';

@Component({
  selector: 'app-admin-favourite',
  standalone: true,
  imports: [CommonModule, GeneralModule],
  templateUrl: './admin-favourite.component.html',
  styleUrl: './admin-favourite.component.scss'
})
export class AdminFavouriteComponent {

  constructor(
    public scritService: ScriptService
  ){}

  ngOnInit(){
    this.scritService.init("admin");
  }
}
