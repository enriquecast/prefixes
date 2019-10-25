import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prefixcss';

  mostrar = true;

    frase: any = {
        mensaje: 'Un gran poder requiere una gran responsabilidad',
        autor: 'Ben Parker'
    };


    personajes: string[] = ['Spiderman', 'Venom', 'Dr. Octopus'];
}
