import displayRecarga from '/display.js';
import {displayVida} from "/display.js"

export default class Escopeta {
    constructor() {
        this.balas = []; // Array de balas
        //this.recargar(); // Llenar el array de balas al inicializar la escopeta
    }

    recargar() {
        const balaReal = new Bala(true,1);
        const balaFake = new Bala(false,0);

        const numBalas = Math.floor(Math.random() * 7) + 3; // Número aleatorio de balas (entre 3 y 9)
         console.log("Cantidad Balas: " +numBalas);
        // this.balas = Array(numBalas).fill('real'); // Llenar el array con balas reales

  
         for (let i = 0; i < numBalas; i++) {
            const roll = Math.round(Math.random() * 9 + 1);
            if (roll <=5) {
                this.balas.push(balaFake)
                console.log("Roll = "+roll+" ///-- Bala Falsa");
            } else if(roll >=6){
                this.balas.push(balaReal)
                console.log("Roll = "+roll+" ///-- Bala Real");
            }
         }

         displayRecarga(this.balas)

    }

    disparar() {
        const bala = this.balas.shift(); // Sacar la primera     bala del array
        return bala;
    }

        // Funcion para Disparar a si mismo
    shootSelf(player1,player2) {
        const bala = this.disparar();
        if (bala.tipo == false) {
            //Repite turno
            let infoAttack = document.getElementById("display-attack-info")
            infoAttack.textContent = player1.nombre+" se ha disparado una bala falsa"

            console.log(player1.nombre+" se ha disparado una bala falsa");
        } else if(bala.tipo == true){
            player1.vida = (player1.vida) - 1;
            displayVida(player1,player2)

            let infoAttack = document.getElementById("display-attack-info")
            infoAttack.textContent = player1.nombre+" se ha disparado una bala verdadera"
            console.log(player1.nombre+" se ha disparado una bala verdadera");
        }
    }

    //funcion para dispararse a enemigo
    shootEnemy(player1,player2) {
        const bala = this.disparar();

        if (bala.tipo == false) { // No pasa nada
            let infoAttack = document.getElementById("display-attack-info")
            infoAttack.textContent = player1.nombre+" le ha disparado a "+player2.nombre+" una bala falsa"
            console.log(player1.nombre+" le ha disparado a "+player2.nombre+" una bala falsa");
        } else if(bala.tipo == true){ // Le saca 1 de vida al enemigo
            player2.vida = (player2.vida) - 1;
            displayVida(player1,player2)

            let infoAttack = document.getElementById("display-attack-info")
            infoAttack.textContent = player1.nombre+" le ha disparado a "+player2.nombre+" una bala verdadera"
            console.log(player1.nombre+" le ha disparado a "+player2.nombre+" una bala verdadera");

        }
        
    }
}


 class Bala {
     constructor(tipo, daño) {
         this.tipo = tipo;
         this.daño = daño;
     }
 }

