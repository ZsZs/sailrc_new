import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';

@Component({
  imports: [ RouterModule, HeaderComponent, SidenavComponent, FooterComponent, MatSidenavContent, MatSidenav, MatSidenavContainer ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'sailrc';
}
