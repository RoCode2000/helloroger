import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-firstpage',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './firstpage.component.html',
  styleUrl: './firstpage.component.css',
})
export class FirstpageComponent {}
