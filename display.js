
    export default function displayRecarga(balas) {

        const displayExistente = document.querySelector(".display");
        if (displayExistente) {
            displayExistente.remove(); // Eliminar el display existente
        }
         
        const table = document.getElementById("table-info")

        const display = document.createElement("div") // ???
        display.className = "display"
        
        const cajaBalas = document.createElement("div")
        cajaBalas.className = "caja-balas"

        const deleteButton = document.createElement("button")
        deleteButton.className = "display-delete-button"
        deleteButton.textContent = "Borrar"
        deleteButton.addEventListener("click", ()=>{
            display.remove();
        });

        const balasMezcladas = balas.slice();
        balasMezcladas.sort(()=>Math.random()-0.5);

        balasMezcladas.forEach(bala => {
            if (bala.tipo == true) {
                
               let bala = document.createElement("div")
               bala.className = "bala-true";
               bala.textContent = "Real"
               cajaBalas.appendChild(bala);

            } else if(bala.tipo == false){
                let bala = document.createElement("div")
                bala.className = "bala-false";
                bala.textContent = "Fake"
                cajaBalas.appendChild(bala);
            }
        });
        
        display.appendChild(cajaBalas)
        display.appendChild(deleteButton)
        table.appendChild(display)

    }

    export function displayVida(player1,player2) {
        let infoVida = document.getElementById("display-vida-info")
        infoVida.textContent = player1.nombre+" HP = "+player1.vida+" ||| "+player2.nombre+" HP = "+player2.vida
     }

     export function displayTurns(player1,player2,turn) {

        let turnText = document.getElementById("display-turn-info")

        if (turn == true) {
            turnText.textContent += " "+player1.nombre
        } else if (turn == false){
            turnText.textContent += " "+player2.nombre
        }

     }

     export function displayContadorBalas(balas) {

        let counterText = document.getElementById("")

        counterText.textContent = "Balas Restantes: "+balas+"   ||| Balas Reales:"+reale+"   ||| Balas Fake:"+fakes
        
     }

    
  