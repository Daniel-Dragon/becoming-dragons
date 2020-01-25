import { Component, isDevMode, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDevMode: boolean = isDevMode();
  showScrollToTop = false;
  title = 'app';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // In chrome and some browser scroll is given to body tag
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    const max = document.documentElement.scrollHeight;
    // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
    const percent = pos / max - 1;
    if (percent > .10)   {
      // Do your action here
      this.showScrollToTop = true;
    } else {
      this.showScrollToTop = false;
    }
  }

  public scrollToTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}
