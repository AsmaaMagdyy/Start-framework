import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
 
templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @HostListener('window:scroll', ['$event'])

onWindowScroll() {
    let element = document.querySelector('nav') as HTMLElement;
    if (window.scrollY > element.clientHeight) {
      element.classList.add('add-py-2'); 
      element.classList.remove('add-py-4');
     

    } else {
      element.classList.add('add-py-4');
      element.classList.remove('add-py-2');

    }
  }
 
  
}
