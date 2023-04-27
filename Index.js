const entrada = require('prompt-sync')();   

console.log('hello word!');

let nome = entrada('Digite seu nome:');

console.log('Olá, ' + nome);

let  idadeTxt = entrada (nome +' Quantos anos voce tem?');
let idade =  parseInt(idadeTxt);

let resposta = 'n'
if(idade <15) { 
    resposta = entrada('Acredito que você esteja no fundamental .\nEstou Certo? (s/n) ');
}
else if( idade >= 15  && idade <= 18){
    resposta = entrada('Acredito que voce esteja cursando o ensino medio. \nEstou Certo? (s/n)')
}

else if( idade >= 100){
    resposta = entrada('Acredito que voce não esteja nesse mundo. \nEstou Certo? (s/n)')
}

else{
    resposta = entrada ('Acredito que voce já tenha terminado o ensino medio. \nEstou Certo? (s/n) ')
}

if (resposta === 'n') {
    console.log('Ok, eu não sei de tudo...Ainda pelo menos');
}
else if (resposta === 's') {
    console.log('Legal, quando eu crescer vou ser igual o Chat GPT');
}
else{
    console.log('não entendi')
}



entrada('Fim do programa, pressione ENTER para encerrar');