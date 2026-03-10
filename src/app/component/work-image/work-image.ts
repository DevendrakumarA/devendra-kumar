import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-image',
  imports: [CommonModule],
  templateUrl: './work-image.html',
  styleUrl: './work-image.css',
})
export class WorkImage {
  @Input() image!: string;
  @Input() alt?: string;
  @Input() video?: string;
  @Input() link?: string;

  isVideo = false;
  videoUrl = "";

  async mouseEnter() {

    if (this.video) {

      this.isVideo = true;

      const response = await fetch(`assets/${this.video}`);

      const blob = await response.blob();

      this.videoUrl = URL.createObjectURL(blob);

    }

  }
}
