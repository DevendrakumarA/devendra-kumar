import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  imports: [CommonModule],
  templateUrl: './work.html',
  styleUrl: './work.css',
})
export class Work {
  currentIndex = 0;

  projects = [

    {
      title: "Solid Starters",
      category: "Low-Code Platform",
      tools: "Angular, Next.js, NestJS, MongoDB",
      image: "/images/Solidx.png"
    },

    {
      title: "Radix",
      category: "E-Commerce",
      tools: "Angular, Next.js, NestJS, CMS",
      image: "/images/radix.png"
    }

  ];

  goPrev() {

    this.currentIndex =
      this.currentIndex === 0
        ? this.projects.length - 1
        : this.currentIndex - 1;

  }

  goNext() {

    this.currentIndex =
      this.currentIndex === this.projects.length - 1
        ? 0
        : this.currentIndex + 1;

  }
}
