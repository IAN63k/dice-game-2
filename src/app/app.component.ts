import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto004';
  valor1: number;
  valor2: number;
  valor3: number;
  resultado: string = "";
  constructor() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
  }
  private retornarAleatorio(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  tirar() {

    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();

    const valores = [this.valor1, this.valor2, this.valor3];
    const plataforma = document.querySelectorAll('#platform') as NodeListOf<HTMLElement>;
    const dadoElementos = document.querySelectorAll('#dice') as NodeListOf<HTMLElement>;

    plataforma.forEach((elemento) => {
      elemento.classList.remove('stop');
      elemento.classList.add('playing');
    });

    setTimeout(() => {
      plataforma.forEach((elemento) => {
        elemento.classList.remove('playing');
        elemento.classList.add('stop');
      });

      for (let i = 0; i < dadoElementos.length; i++) {
        let x: number = 0, y: number = 20, z: number = -20;

        switch (valores[i]) {
          case 1:
            x = 0; y = 20; z = -20;
            break;
          case 2:
            x = -100; y = -150; z = 10;
            break;
          case 3:
            x = 0; y = -100; z = -10;
            break;
          case 4:
            x = 0; y = 100; z = -10;
            break;
          case 5:
            x = 80; y = 120; z = -10;
            break;
          case 6:
            x = 0; y = 200; x = 10;
            break;
        }

        dadoElementos[i].style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
      }

      plataforma.forEach((elemento) => {
        elemento.style.transform = 'translate3d(0,0, 0px)';
      });

      if (valores[0] === valores[1] && valores[0] === valores[2]) {
        this.resultado = 'Ganó 😎';
      } else if (valores[0] == valores[1] || valores[0] == valores[2] || valores[1] == valores[2]) {
        this.resultado = 'Ganó 2 de 3 🥱';
      } else {
        this.resultado = 'Perdió 😆';
      }


    }, 1120);



  }


}
