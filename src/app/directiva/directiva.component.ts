import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent  {

  listaCurso: string[]= ['Java', 'TypeScrib', 'spring boot ', 'C#'];
 habilitar:boolean=true;


public setHabilitar():void{
    console.log('Entrooo');
  this.habilitar=(this.habilitar==true)?false:true;
  console.log('Salioo');
}
}
