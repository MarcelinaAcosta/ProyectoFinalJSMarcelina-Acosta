let TarjetasListado = []

function Tarjeta(verbo, past, participle) {
    this.verbo = verbo;
    this.past = past;
    this.participle = participle
}

const tarjeta1 = TarjetasListado.push(new Tarjeta("be - Ser o estar", "was/were" , "been"));
const tarjeta2 = TarjetasListado.push(new Tarjeta("become - Llegar a ser", "became" ,"become"));
const tarjeta3 = TarjetasListado.push(new Tarjeta("begin - comenzar", "began" , "begun"));
const tarjeta4 = TarjetasListado.push(new Tarjeta("break - Romper", "broke" , "broken"));
const tarjeta5 = TarjetasListado.push(new Tarjeta("bring - traer", "brought" , "brought"));
const tarjeta6 = TarjetasListado.push(new Tarjeta("build - construir", "built" , "built"));
const tarjeta7 = TarjetasListado.push(new Tarjeta("buy - comprar", "bought" , "bought"));
const tarjeta8 = TarjetasListado.push(new Tarjeta("can - poder", "could" , "---"));
const tarjeta9= TarjetasListado.push(new Tarjeta("catch - agarrar", "caught" , "caught"));
const tarjeta10 = TarjetasListado.push(new Tarjeta("choose - elegir", "was/were" , "been"));
const tarjeta11 = TarjetasListado.push(new Tarjeta("come - venir", "came" , "come"));
const tarjeta12 = TarjetasListado.push(new Tarjeta("cost - costar", "cost" , "cost"));
const tarjeta13 = TarjetasListado.push(new Tarjeta("cut - cortar", "cut" , "cut"));
const tarjeta14 = TarjetasListado.push(new Tarjeta("do - hacer", "did" , "done"));
const tarjeta15 = TarjetasListado.push(new Tarjeta("dream - soñar", "dreamt (also dreamed)" , "dreamt (also dreamed)"));
const tarjeta16 = TarjetasListado.push(new Tarjeta("drink - beber", "drank" , "drunk"));
const tarjeta17 = TarjetasListado.push(new Tarjeta("drive - conducir", "drove" , "driven"));
const tarjeta18 = TarjetasListado.push(new Tarjeta("eat - comer", "ate" , "eaten"));
const tarjeta19 = TarjetasListado.push(new Tarjeta("fall - caer", "fell" , "fallen"));
const tarjeta20 = TarjetasListado.push(new Tarjeta("feel - sentir", "found" , "found"));

function mostrarCards () {
    let html = "";
    TarjetasListado.forEach(function (card) {
    html += 'verbo en infinitivo: '+ card.verbo + '<br>' + 'Past simple: ' + card.past + '<br>' + 'presente perfecto: ' + card.participle + '<br>'
    });
    document.getElementById("card").innerHTML = html;
}

mostrarCards();

let buttonPlusCard = document.getElementById('buttonPlusCard');

buttonPlusCard.addEventListener('click', () => {
    let verboPrompt = prompt('Agregar verbo en infinitivo (con su traduccion entre paréntesis)');
    let pastPromt = prompt('Agregar verbo en pasado simple:');
    let participlePrompt = prompt('Agregar verbo en presente perfecto: ');

    guardarDatosEnArray(verboPrompt, pastPromt, participlePrompt);
});


function guardarDatosEnArray(dato1, dato2, dato3) {

    TarjetasListado.push(new Tarjeta( dato1, dato2, dato3))
    mostrarCards();
    
};
