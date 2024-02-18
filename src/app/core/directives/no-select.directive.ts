import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[noSelect]',
  standalone: true,
})
export class NoSelectDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, '-webkit-user-select', 'none');
    this.renderer.setStyle(this.el.nativeElement, '-moz-user-select', 'none');
    this.renderer.setStyle(this.el.nativeElement, '-ms-user-select', 'none');
    this.renderer.setStyle(this.el.nativeElement, 'user-select', 'none');
  }
}
