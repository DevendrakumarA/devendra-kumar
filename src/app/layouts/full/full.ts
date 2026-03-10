import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cursor } from "../../component/cursor/cursor";
import { SocialIcons } from "../../component/social-icons/social-icons";
import { CommonModule } from '@angular/common';
import { Loading } from "../../component/loading/loading";
import { Landing } from "../../component/landing/landing";
import { About } from "../../component/about/about";
import { WhatIDo } from "../../component/what-i-do/what-i-do";
import { Career } from "../../component/career/career";
import { Work } from "../../component/work/work";
import { TechStack } from "../../component/tech-stack/tech-stack";
import { Contact } from "../../component/contact/contact";
import { Header } from '../../shared/header/header';

@Component({
  selector: 'app-full',
  imports: [Cursor, Header, SocialIcons, CommonModule, Landing, About, WhatIDo, Career, Work, TechStack, Contact],
  templateUrl: './full.html',
  styleUrl: './full.css',
})
export class Full implements OnInit {
  isDesktopView: boolean = false;
  ngOnInit(): void {
    this.resizeHandler();
  }

  @HostListener('window:resize')
  resizeHandler() {

    setSplitText();

    this.isDesktopView = window.innerWidth > 1024;

  }
}
function setSplitText() {
  throw new Error('Function not implemented.');
}

