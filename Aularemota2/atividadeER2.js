/*Considere a quantidade de alunos presentes na sala, percorra do zero até o número total e retornar os seguintes resultados:

- Se o número for par, escreva ‘par’ e o número correspondente
- Se o número for ímpar, escreva ‘impar’ e o número correspondente 
- Se o número for zero, escreva ‘zero’ 

 */

let numeroDeAlunos = 10;
  
for (let contador = 0; contador <= numeroDeAlunos; contador++) 
{
    console.log (contador);

    if(contador==0){

       console.log(`${contador} - zero`)
    }
    else if((contador % 2)== 0){
        console.log(`${contador}) - PAR`)
        
    } 

    else{

        console.log(`${contador}) - IMPAR`)
    }
    
}