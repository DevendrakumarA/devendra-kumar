import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  imports: [],
  templateUrl: './loading.html',
  styleUrl: './loading.css',
})
export class Loading implements OnInit {
 @Input() percent: number = 0;

  loaded = false;
  isLoaded = false;
  clicked = false;

  ngOnInit(): void {

    if (this.percent >= 100) {

      setTimeout(() => {

        this.loaded = true;

        setTimeout(() => {
          this.isLoaded = true;
        }, 1000);

      }, 600);

    }

  }

  handleMouseMove(event: MouseEvent) {

    const target = event.currentTarget as HTMLElement;

    const rect = target.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);

  }
}
