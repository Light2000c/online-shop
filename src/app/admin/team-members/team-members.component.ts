import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GeneralModule } from '../../components/general/general.module';
import { ScriptService } from '../../services/script/script.service';

@Component({
  selector: 'app-team-members',
  standalone: true,
  imports: [CommonModule, GeneralModule],
  templateUrl: './team-members.component.html',
  styleUrl: './team-members.component.scss'
})
export class TeamMembersComponent {

  constructor(
    public scriptService: ScriptService
  ){}

  ngOnInit(){
    this.scriptService.init("admin");
  }
}
