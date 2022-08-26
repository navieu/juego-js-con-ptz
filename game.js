const canvas = document.querySelector('#game');

const game = canvas.getContext('2d');

let elementSize;
let canvasSize;
// escuchamos al hmtl a la ventana como dice el nombre 
// y a terminar de cargar se inizia el juego por que 
// en algunas ocasiones no se funcione el juego por que
// nose cargo el canvas y por eso esta encapsulado
window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function startGame(){


    const map = maps[2];
    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(c => c.trim().split(''));
    game.font = elementSize+'px Verdana';
    game.textAlign = 'end';

    // en el foreach tambien podemos saber el indice en el que esta 
    // solo tenemos que dar una variable como se muestra
    mapRowCols.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) => {
            const emoji = emojis[col];
            const posX = elementSize*(colIndex+1);
            const posY = elementSize*(rowIndex+1);
            game.fillText(emoji,posX,posY);
        });
    });


    // for (let c = 1; c <= 10; c++) {
    //     for(let i = 1;i <= 10;i++){
    //         game.fillText(emojis[mapRowCols[c-1][i-1]], elementSize*i,elementSize*c);
    //     }
    //     game.fillText(emojis['X'], elementSize*i,elementSize);
    // }
}
function setCanvasSize(){

    if(window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.8;
    }else{
        canvasSize = window.innerHeight * 0.8;
    }
    // esto agarra el tamaño del alto window.innerHeight el 0.8 agarra el 80%
    //canvas.setAttribute('width', window.innerHeight * 0.8);
    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    elementSize = canvasSize/10;

    startGame();
}





// -----------------------------------------

    // esto dibuja en el canvas fillRect para dibujar un rectangulo negro
    // clearRect para limpiar el regtangulo las posiciones(0,0,0,0)
    // son (eje x,eje y,w: ancho,h: altura)
    // game.fillRect(50,0,400,700);
    // game.clearRect(0,0,50,50);
    // game.clearRect(50,0,50,50);

    // con el font podemos modificar el tamaño y el tipo de letra
    //game.font = '25px Verdana';
    // con el style podemos modificar el color y estos no son como funciones 
    // sino que tenemos que darles varlores
    //game.fillStyle = 'purple';
    // textAlign esto indica de donde empieza las coordenadas si al principio start
    // left o al final end o right tambien hay center
    //game.textAlign = 'end';
    // Text puede insertar texto pero tambien hay que darle las coordenadas
    //game.fillText('Platzi', 50,50);
