import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
import * as string_decoder from "string_decoder";

@Directive({
  selector: '[appOnScroll]',
  standalone: true
})
export class OnScrollDirective {
  @Input() property : string
  @Input() value_after : string
  @Input() value_before : string
  @Input() time : number
  constructor(private el : ElementRef, private renderer : Renderer2) { }
  private observer : IntersectionObserver
  ngOnInit():void{
    this.animate()
  }
  animate() : void {
    const options = {threshold : 0.6}
    this.renderer.setStyle(this.el.nativeElement , 'opacity' , '0')
    this.renderer.setStyle(this.el.nativeElement , this.property , this.value_before)
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(entry);
          this.renderer.setStyle(entry.target, 'opacity' , '1')
          this.renderer.setStyle(entry.target , this.property , this.value_after)
          this.renderer.setStyle(entry.target, 'transition' , `all ease ${this.time}s`)
        }
      })
    } , options)
    this.observer.observe(this.el.nativeElement)

  }
}
