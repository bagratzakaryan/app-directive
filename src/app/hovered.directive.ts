import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHovered]'
})
export class HoveredDirective {
  @Input() defaultColor: string;
  @Input() appHovered: string;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.hover(this.appHovered || this.defaultColor || 'red', 'white');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.hover(null, 'black');
  }

  private hover(bgColor: string, fontColor: string) {
    this.el.nativeElement.style.backgroundColor = bgColor;
    this.el.nativeElement.style.color = fontColor;
  }
}
