import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GeneralModule } from '../../components/general/general.module';
import { ScriptService } from '../../services/script/script.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, GeneralModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  constructor(
    public scriptService: ScriptService
  ){}

  ngOnInit(){
    this.scriptService.init("admin");
  }
}
