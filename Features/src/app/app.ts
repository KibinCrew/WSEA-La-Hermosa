import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeaturesComponent } from './features/features';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FeaturesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LaHermosa');
}
