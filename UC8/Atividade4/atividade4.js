//Algoritmo-cadastro de eventos//

//declaração das variáveis//
let idade = 27
let listaDeParticipantes = []
listaDeParticipantes.push('Mara Souza')
listaDeParticipantes.push('Suzana Freitas')
listaDeParticipantes.push('Cláudio Manuel')
listaDeParticipantes.push('Augusto Flores')
listaDeParticipantes.push('Luís Pereira')
    


if (idade >= 18) {
    console.log("cadastro permitido!")
}
else{
    console.log("cadastro não permitido pela idade!!!")
}

let númeroDeParticipantes = 5

for (let contador = 1; contador < 100; contador++)
{
    if (contador <= 100)
    console.log(`${contador}`)
   }
    else if(contador < 100){
    console.log("cadastro concluído!")
   }
    else{
    console.log("limite de participantes excedido!")
}