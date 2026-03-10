import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Loading } from './service/loading';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('devendra-kumar');
  isLoading = true;
  percent = 0;

  constructor(private loadingService: Loading) {

    this.loadingService.isLoading$.subscribe(v => {
      this.isLoading = v;
    })

    this.loadingService.percent$.subscribe(v => {
      this.percent = v;
    })

  }
}
