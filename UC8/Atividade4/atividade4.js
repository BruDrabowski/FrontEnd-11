//Algoritmo-cadastro de eventos//

let idade = 27
    
//condição da idade para cadastro

if (idade >= 18) {
    console.log("cadastro permitido!")
}
else{
    console.log("cadastro não permitido pela idade!!!")
}


//exibir lista de participantes

for (let contador = 1; contador <= 100 ; contador++)
{
    if (contador <= 100){
    console.log(`${contador}`)
       
}   
}

//condição de número de participantes para o cadastro

let listaDeParticipantes = []
listaDeParticipantes.push('Mara Souza')
listaDeParticipantes.push('Suzana Freitas')
listaDeParticipantes.push('Cláudio Manuel')
listaDeParticipantes.push('Augusto Flores')
listaDeParticipantes.push('Luís Pereira')

if (listaDeParticipantes.length<101){
    console.log("cadastro concluído!")
}

else {
    console.log ("limite de participantes excedido!")
}