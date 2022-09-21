let nomePeca = 'Fre'

if (nomePeca.length > 3){
    console.log('O nome da peça esta adequado para o cadastro')
}
else if(nomePeca.length == 0){
    console.log("O nome da peça não pode ser vazio.")
}
else{
    console.log("O nome da peça deve ter mais de 3 caracteres, digite o nome adequado")
}
