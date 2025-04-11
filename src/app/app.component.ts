import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { UserComponent } from './component/user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdminComponent,UserComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
}
