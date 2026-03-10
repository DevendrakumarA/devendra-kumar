import { AfterViewInit, Component } from '@angular/core';
import { HoverLinks } from "../../component/hover-links/hover-links";

@Component({
  selector: 'app-header',
  imports: [HoverLinks],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements AfterViewInit {
  smoother: any;

  ngAfterViewInit(): void {

    this.smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true
    });

    this.smoother.scrollTop(0);
    this.smoother.paused(true);

    document.querySelectorAll(".header ul a").forEach((elem: any) => {

      elem.addEventListener("click", (e: any) => {

        if (window.innerWidth > 1024) {

          e.preventDefault();

          const section = elem.getAttribute("data-href");

          this.smoother.scrollTo(section, true, "top top");

        }

      });

    });

  }
}
