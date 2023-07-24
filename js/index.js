let buttonPlusCard = document.getElementById('buttonPlusCard');
let buttonOcultarMostrarListado = document.getElementById('OcultarMostrarListado');
// let eliminarFlashCard = document.getElementById('eliminarFlashcard');

let TarjetaListadoParse = JSON.parse(localStorage.getItem('listadosDeCards'));



let TarjetasListado = []

function Tarjeta(verbo, past, participle) {
    this.verbo = verbo;
    this.past = past;
    this.participle = participle
} // funcion constructora de los objetos.

//pusheando los objetos al array "TarjetaListado"
TarjetasListado.push(new Tarjeta("be - Ser o estar", "was/were" , "been"));
TarjetasListado.push(new Tarjeta("become - Llegar a ser", "became" ,"become"));
TarjetasListado.push(new Tarjeta("begin - comenzar", "began" , "begun"));
TarjetasListado.push(new Tarjeta("break - Romper", "broke" , "broken"));
TarjetasListado.push(new Tarjeta("bring - traer", "brought" , "brought"));
TarjetasListado.push(new Tarjeta("build - construir", "built" , "built"));
TarjetasListado.push(new Tarjeta("buy - comprar", "bought" , "bought"));
TarjetasListado.push(new Tarjeta("can - poder", "could" , "---"));
TarjetasListado.push(new Tarjeta("catch - agarrar", "caught" , "caught"));
TarjetasListado.push(new Tarjeta("choose - elegir", "was/were" , "been"));
TarjetasListado.push(new Tarjeta("come - venir", "came" , "come"));
TarjetasListado.push(new Tarjeta("cost - costar", "cost" , "cost"));
TarjetasListado.push(new Tarjeta("cut - cortar", "cut" , "cut"));
TarjetasListado.push(new Tarjeta("do - hacer", "did" , "done"));
TarjetasListado.push(new Tarjeta("dream - soñar", "dreamt (also dreamed)" , "dreamt (also dreamed)"));
TarjetasListado.push(new Tarjeta("drink - beber", "drank" , "drunk"));
TarjetasListado.push(new Tarjeta("drive - conducir", "drove" , "driven"));
TarjetasListado.push(new Tarjeta("eat - comer", "ate" , "eaten"));
TarjetasListado.push(new Tarjeta("fall - caer", "fell" , "fallen"));
TarjetasListado.push(new Tarjeta("feel - sentir", "found" , "found"));

const CardsJSON = JSON.stringify(TarjetasListado);
localStorage.setItem('ListadosDeCards', CardsJSON);

buttonPlusCard.addEventListener('click', () => { // aca estoy creando un evento para agregar datos a objetos nuevos
    let verboPrompt = prompt('Agregar verbo en infinitivo (con su traduccion entre paréntesis)');
    let pastPromt = prompt('Agregar verbo en pasado simple:');
    let participlePrompt = prompt('Agregar verbo en presente perfecto: ');

    guardarDatosEnArray(verboPrompt, pastPromt, participlePrompt); // retorno los valores almacenados hacia la funcion "guardarDatosEnArray"
    actualizarListadoEnPantalla();
});

function eliminarCard(index) { // elimina las cards del array en el local storage
    TarjetaListadoParse.splice(index, 1);
    localStorage.setItem('listadosDeCards', JSON.stringify(TarjetaListadoParse));
    actualizarListadoEnPantalla();
}


function guardarDatosEnArray(dato1, dato2, dato3) { // funcion que recibe los valores retornados en el evento y los pushea como objeto hacia el array
    TarjetasListado.push(new Tarjeta( dato1, dato2, dato3))
    const CardsJSONactualizadas = JSON.stringify(TarjetasListado);
    localStorage.setItem("listadosDeCards", CardsJSONactualizadas);
    TarjetaListadoParse = JSON.parse(CardsJSONactualizadas); // Actualiza la variable TarjetaListadoParse
    
};



function actualizarListadoEnPantalla() { // funcion que imprime en el html la lista de flashCards
        // 
        let html = "";
        TarjetaListadoParse.forEach(function (card, index) {
            html += 'verbo en infinitivo: '+ card.verbo + '<br>' + 'Past simple: ' + card.past + '<br>' + 'presente perfecto: ' + card.participle + '<br>' + `<button onclick="eliminarCard(${index})">"Eliminar flashcard"</button><br>`;
        });
        document.getElementById("card").innerHTML = html;

        
    };

    buttonOcultarMostrarListado.addEventListener('click', () => {
        let ListadosDeArray = document.getElementById('card');
        // Alterna la visibilidad del elemento con id "card"
        ListadosDeArray.style.display = ListadosDeArray.style.display === 'none' ? 'block' : 'none';
    });
    
    actualizarListadoEnPantalla();

function rondaDeFlashCards(indice) { // funcion para mostrar objeto 1 por 1
    let flashCardEnPantalla = TarjetasListado[indice];
    let htmlFlashCard = 'verbo : ' + flashCardEnPantalla.verbo + 'past simple :' + flashCardEnPantalla.past + 'present perfect :' + flashCardEnPantalla.participle; 
    // console.log(flashCardEnPantalla)
    document.getElementById("rondaDeFlashCards").innerHTML = htmlFlashCard;
    
}
let indiceActualFlashCard = 0;

rondaDeFlashCards(indiceActualFlashCard);

let btnSiguienteFlashCard = document.getElementById("mostrarSiguienteFlashCard");

btnSiguienteFlashCard.addEventListener('click', () => { // evento creado para pasar de tarjeta a tarjeta mediante un boton 
    indiceActualFlashCard++
    if(indiceActualFlashCard < TarjetasListado.length){
        rondaDeFlashCards(indiceActualFlashCard);
    }
    else{
        htmlFlashCard2 += ' llegaste al final de la ronda !'
        document.getElementById("rondaDeFlashCards").innerHTML = htmlFlashCard2;
    }
});
