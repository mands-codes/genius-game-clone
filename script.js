let order = [];
//ordem dos cliques
let clickedOrder = []

let score = 0;

//0 = verde
//1 = vermelho
//2 = amarelo
// 3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//sortear numeros entre 0-3
//cria ordem aleatoria de cores
let ordemAleatoria = () =>{
    let colorOrder = Math.floor(Math.random() * 4);
//atribuir o numero selecionado ao array
order[order.length] = colorOrder;
clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor,Number(i)+1)
       //number (i)+1 para poder existir a lista de cores 
    }
}
//acende a proxima cor
let lightColor = (element, time)=>{
    time = time * 500;
    setTimeout(() =>{
        element.classList.add('selected');
    }, time - 250);

    setTimeout(()=>{
        element.classList.remove('selected');
    }, time); 
}
// checar a ordem clicada
let checkOrder =  () =>{
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
        gameOver();
        break;
        }
    }
//verficar se a ordem dos arrays é igual
    if(clickedOrder.length === order.length){
alert(`Pontuação  ${score}\n Você acertou! Iniciando próximo nível`);
nextLevel();
    }
}

//funcao para clique do usuario
let click = (color)=>{
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(()=>{
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250)

 
}

///criar função que retorna a cor

let createColorElement = (color)=>{
    if(color ==0){
        return green;
    }else if(color ==1){
        return red;
    }else if (color ==2){
        return yellow;
    }else if(color ==3){
        return blue;
    }
}

///funcao para proximo nivel do jogo
let nextLevel = () =>{
    score++;
    ordemAleatoria();
}
//funcao para gameover, passa um alert e recomeça  o jogo
let gameOver = () =>{
alert(`Pontuação: ${score}!\n Você perdeu o jogo\nClique em OK para iniciar um novo jogo`);
order = [];
clickedOrder = []

playGame();

}
let playGame = () =>{
    alert("Bem vindo ao Genius! Iniciando novo jogo...")
    score = 0;
    nextLevel();
}
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();
