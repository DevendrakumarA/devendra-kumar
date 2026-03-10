import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hover-links',
  imports: [],
  templateUrl: './hover-links.html',
  styleUrl: './hover-links.css',
})
export class HoverLinks {
  @Input() text!: string;

  @Input() cursor: boolean = false;

}
