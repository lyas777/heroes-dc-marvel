import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent {
   heroe: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private router: Router) {
    // observador que es como una promesa, reciviremos el valor de la ruta
    this.activatedRoute.params.subscribe( params => {
    /* el params nos devuelve un objeto con propiedad id y su valor,
    pero no lo reconoce si ponemos params.id por eso lo llamas de la siguiente manera
    "id" es lo que declaramos en el router "heroe: id" */
    // console.log(params['id']);
      // hacer referencia al servicio importar el servicio
      this.heroe = this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }
  regresar(): any {
    this.router.navigate(['/heroes']);
  }

}
