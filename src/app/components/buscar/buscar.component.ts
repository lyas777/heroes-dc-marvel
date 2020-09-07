import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor( private activateRouter: ActivatedRoute, private heroesService: HeroesService, private router: Router) { }

  ngOnInit(): void {
    this.activateRouter.params.subscribe( params => {
      this.heroes = this.heroesService.buscarHeroes(params[ 'termino' ]);
      //console.log(this.heroes);
      this.termino = params['termino'];
    });
  }

  verHeroe(idx: number): any{
    // como direccionar hay que importar router y declarar en el constructor y se llama de la siguiente manera:
    this.router.navigate( ['/heroe', idx] );
  }
}
