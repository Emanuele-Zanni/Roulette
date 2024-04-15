import Player from '/player.js';
import Escopeta from '/escopeta.js';
import {displayVida} from "/display.js"
import {displayTurns} from "/display.js"

//-------------------------------------------------------------------------------------------------------------------------------------------

 const p1 = new Player("Jugador 1",5);
 const p2 = new Player("Jugador 2",5);
 console.log(p1);
 console.log(p2);

 const escopeta = new Escopeta;
 
 
 
function infoUpdate() {

    let infoBalas = escopeta.balas.map(bala => bala.tipo);
    console.log("Balas de la Escopeta = [" + infoBalas.join("] [")+"]");

    console.log(p1.nombre+" HP = "+p1.vida);
    console.log(p2.nombre+" HP = "+p2.vida);
 }

function changeName(player1,player2) {

    let p1name = document.getElementById("player1-name")
    let p2name = document.getElementById("player2-name")

    let p1nameNew = document.getElementById("player1-name-new").value
    let p2nameNew = document.getElementById("player2-name-new").value

    p1name.textContent = p1nameNew
    p2name.textContent = p2nameNew

    player1.nombre = p1nameNew
    player2.nombre = p2nameNew
 }


// Funcion para decidir quien tiene el primer turno ALEATORIAMENTE
function startingTurn(){

   const coin = Math.round(Math.random())
   let turn;

   if (coin == 1) {
      turn = true;
   } else if(coin == 0){
      turn = false;
   }

   return turn;
}

// Le pasa los valores de la funcion y asigna el primer turno ALEATORIAMENTE
const turn = startingTurn();
console.log(turn);
displayTurns(p1,p2,turn);
//Funcion para cambiar turno despues de lastimarse, lastimar o disparar fake al enemigo




const p1self = document.getElementById("P1-Self");
p1self.addEventListener("click", () => {
   escopeta.shootSelf(p1,p2)
   displayTurns()
});

const p1atk = document.getElementById("P1-Attack");
p1atk.addEventListener("click", () => escopeta.shootEnemy(p1,p2));

const p2self = document.getElementById("P2-Self");
p2self.addEventListener("click", () => escopeta.shootSelf(p2,p1));

const p2atk = document.getElementById("P2-Attack");
p2atk.addEventListener("click", () => escopeta.shootEnemy(p2,p1));

const infoUpd = document.getElementById("InfoUpdate");
infoUpd.addEventListener("click", infoUpdate)

const vidaUpd = document.getElementById("VidaUpdate");
vidaUpd.addEventListener("click", () => displayVida(p1,p2));

const reload = document.getElementById("Recargar")
reload.addEventListener("click", () => escopeta.recargar());

const p1name = document.getElementById("change-player1-name")
p1name.addEventListener("click",()=> changeName(p1,p2))

const p2name = document.getElementById("change-player2-name")
p2name.addEventListener("click",()=> changeName(p1,p2));


//const deleteButton = document.querySelector(".display-delete-button")



// toString() {
//     return `Nombre: ${this.nombre}, Edad: ${this.edad}`;
// }


