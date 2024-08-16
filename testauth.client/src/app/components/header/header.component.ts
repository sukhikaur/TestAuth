import { Component, inject } from '@angular/core';
import { AuthService } from '../../auth.service';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public authService = inject(AuthService); 






}
