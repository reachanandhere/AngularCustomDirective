import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
})
export class SafeLinkDirective {
  @Input({ alias: 'appSafeLink' }) queryParam: string = 'myapp';

  
  constructor(private elementRef: ElementRef) {
  }

  @HostListener('click', ['$event']) onConfirmLeavePage(event: MouseEvent) {
   
    const wantToLeave = window.confirm('Are you sure you want to leave?');
   
    if (wantToLeave) {
      const address = this.elementRef.nativeElement.href;

      this.elementRef.nativeElement.href =
        address + '?from=' + this.queryParam;
      console.log('Navigating to:', address);
      return;
    }
    event.preventDefault();
  }
}
