import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-cursor',
  imports: [],
  templateUrl: './cursor.html',
  styleUrl: './cursor.css',
})
export class Cursor implements AfterViewInit{
@ViewChild('cursor', { static: true }) cursorRef!: ElementRef;

  ngAfterViewInit(): void {

    let hover = false;
    const cursor = this.cursorRef.nativeElement;

    const mousePos = { x: 0, y: 0 };
    const cursorPos = { x: 0, y: 0 };

    document.addEventListener("mousemove", (e) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    });

    const loop = () => {

      if (!hover) {

        const delay = 6;

        cursorPos.x += (mousePos.x - cursorPos.x) / delay;
        cursorPos.y += (mousePos.y - cursorPos.y) / delay;

        gsap.to(cursor, {
          x: cursorPos.x,
          y: cursorPos.y,
          duration: 0.1
        });

      }

      requestAnimationFrame(loop);
    };

    loop();

    document.querySelectorAll("[data-cursor]").forEach((item: any) => {

      item.addEventListener("mouseover", (e: MouseEvent) => {

        const rect = item.getBoundingClientRect();

        if (item.dataset.cursor === "icons") {

          cursor.classList.add("cursor-icons");

          gsap.to(cursor, {
            x: rect.left,
            y: rect.top,
            duration: 0.1
          });

          cursor.style.setProperty("--cursorH", `${rect.height}px`);

          hover = true;
        }

        if (item.dataset.cursor === "disable") {
          cursor.classList.add("cursor-disable");
        }

      });

      item.addEventListener("mouseout", () => {

        cursor.classList.remove("cursor-disable", "cursor-icons");
        hover = false;

      });

    });

  }
}
