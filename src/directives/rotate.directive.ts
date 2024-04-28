import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRotate]',
  standalone: true
})
export class RotateDirective {
  @Input() angle : number
  constructor(private el : ElementRef , private renderer : Renderer2) { }

  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent): void {
      const rect = this.el.nativeElement.getBoundingClientRect();
      const middleX = rect.left + rect.width / 2;
      const offsetX = (event.clientX - middleX) / middleX;
      this.renderer.setStyle(this.el.nativeElement, 'transform', `rotateY(${offsetX * this.angle}deg) rotateX(7deg)`);
      this.renderer.setStyle(this.el.nativeElement, 'cursor' , 'pointer')
  }
  @HostListener('mouseleave') onMouseLeave(): void {
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'rotateX(0deg) rotateY(0deg)');
      this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.3s ease');
  }

}
