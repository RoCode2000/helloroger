import { Component } from '@angular/core';
import { FirstpageComponent } from './firstpage/firstpage.component';
@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [FirstpageComponent],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css',
})
export class PagesComponent {}
