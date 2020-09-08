import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  // en esta parte nos traerá una propiedad desde fuera de un padre en este caso heroe
  @Input() heroe: any = {};
  @Input() index: number;
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor( private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {
  }

  verHeroe(): any {

    this.router.navigate(['/heroe', this.index]);
    // this.heroeSeleccionado.emit(this.index);
  }

}
