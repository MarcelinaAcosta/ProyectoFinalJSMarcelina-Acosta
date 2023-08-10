let buttonPlusCard = document.getElementById('buttonPlusCard');
let buttonOcultarMostrarListado = document.getElementById('OcultarMostrarListado');

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
            html += '<div class="card_container"><div class="first-content"><span>' + card.verbo + '</span></div><div class="second-content"><span>Past simple:' + card.past + '<br>' + 'present perfect:' + card.participle + '</span></div>' + `<button id="bttnEliminarCard" onclick="eliminarCard(${index})">X</button>` + '</div>' ;
        });
        document.getElementById("card").innerHTML = html;

        
    };

    buttonOcultarMostrarListado.addEventListener('click', () => {
        let ListadosDeArray = document.getElementById('card');
        // Alterna la visibilidad del elemento con id "card"
        ListadosDeArray.style.display = ListadosDeArray.style.display === 'none' ? 'flex' : 'none';
    });
    
    actualizarListadoEnPantalla();

    
// -------------- RONDA DE FLASHCARDS -------------------------------------------
// ------------------------------------------------------------------------------
    let inicioDeRonda = document.getElementById("inicioDeRonda");
    let rondaDeFlashcardsContainer = document.getElementById("rondaDeFlashCards_container");
    let btnSiguienteFlashCard = document.getElementById("mostrarSiguienteFlashCard");
    let comenzarRondaOtraVez = document.getElementById("comenzarRondaOtraVez");
    let cerrarVentana = document.getElementById("cerrarVentana");


    inicioDeRonda.addEventListener('click', () => {
        rondaDeFlashcardsContainer.style.display = rondaDeFlashcardsContainer.style.display === 'none' ? 'block' : 'none';
    })
    cerrarVentana.addEventListener('click', () =>{
        rondaDeFlashcardsContainer.style.display = rondaDeFlashcardsContainer.style.display === 'block' ? 'none' : 'block';
    })
    

    let indiceActualFlashCard = 0;

    function rondaDeFlashCards(indice) { // funcion para mostrar objeto 1 por 1
    let flashCardEnPantalla = TarjetaListadoParse[indice];
    let htmlFlashCard = 'verbo : ' + flashCardEnPantalla.verbo + 'past simple :' + flashCardEnPantalla.past + 'present perfect :' + flashCardEnPantalla.participle; 
    // console.log(flashCardEnPantalla)
    document.getElementById("rondaDeFlashCards").innerHTML = htmlFlashCard;
    
    }
    rondaDeFlashCards(indiceActualFlashCard);

    function mostrarSiguienteFlashCard() {
        indiceActualFlashCard++
    if(indiceActualFlashCard < TarjetaListadoParse.length){
        rondaDeFlashCards(indiceActualFlashCard);
    }
    else{
        htmlFlashCard2 = ' llegaste al final de la ronda !'
        document.getElementById("rondaDeFlashCards").innerHTML = htmlFlashCard2;
    }
    }

    btnSiguienteFlashCard.addEventListener('click', () => { // evento creado para pasar de tarjeta a tarjeta mediante un boton 
        mostrarSiguienteFlashCard();
    
    });

    comenzarRondaOtraVez.addEventListener('click', () => {
        indiceActualFlashCard = 0;
        mostrarSiguienteFlashCard();
    
    });
    
