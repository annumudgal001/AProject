import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { DynamicIsland } from './layout/dynamic-island/dynamic-island';
import { Dock } from './layout/dock/dock';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer, DynamicIsland, Dock],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}