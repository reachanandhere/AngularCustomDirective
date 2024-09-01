import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
})
export class SafeLinkDirective {
  constructor() {
    console.log('SafeLinkDirective');
  }

  @HostListener('click', ['$event']) onConfirmLeavePage(event: MouseEvent) {
    const wantToLeave = window.confirm('Are you sure you want to leave?');
    if (!wantToLeave) {
      event.preventDefault();
    } else {
      return;
    }
  }
}
