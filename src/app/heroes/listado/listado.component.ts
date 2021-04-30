import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'

})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman', 'Hulk', 'Thor'];
  heroeBorrado:string='';

  borrarHeroe (){
    //this.heroes.shift();
    //const heroeBorrado = this.heroes.shift();    
    //console.log(heroeBorrado);
    this.heroeBorrado = this.heroes.shift() || '';    
    

  }
}
