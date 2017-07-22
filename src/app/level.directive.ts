import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appLevel]'
})
export class LevelDirective implements OnInit {
  @Input() appLevel: string;
// @Input() setWidth: number;
  @HostBinding('style.width') setWidth: number;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'minWidth', this.appLevel);
  }


}
