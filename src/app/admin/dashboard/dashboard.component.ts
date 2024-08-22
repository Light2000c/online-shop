import { Component } from '@angular/core';
import { GeneralModule } from '../../components/general/general.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [GeneralModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
