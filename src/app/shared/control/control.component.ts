import { Component,  contentChild,  ContentChild,  ElementRef,  inject,  input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, //Desativa o style componentizado
  host: {
    class: 'control',
    '(click)': 'onClick()',
  }
})
export class ControlComponent {
  // @HostBinding('class') className = 'control'
  label = input.required<string>()
  private el = inject(ElementRef)
  
  // Exemplo com Decorator (Buscar componentes injetados por ng-content)
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>

  // Exemplo com Signal (Buscar componentes injetados por ng-content)
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input')

  onClick() {
    console.log('Clicked!!!')
    console.log(this.el)
    console.log(this.control())
  }
}
