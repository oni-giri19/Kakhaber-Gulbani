import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showGoUpButton = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    // Check the scroll position and decide whether to show the button
    const scrollY = window.scrollY;
    this.showGoUpButton = scrollY > 100; // Adjust 100 to your desired threshold
  }

  scrollToTop(): void {
    // Scroll to the top of the page smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
