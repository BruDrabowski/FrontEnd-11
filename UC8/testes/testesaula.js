let listaDePecas = ['Filtro de Ar','Roda','Pneu']

listaDePecas.push('Disco de Freio')
listaDePecas.push('Motor')
listaDePecas.push('Amortecedor')
listaDePecas.push('pastilhas')
listaDePecas.push('parabrisa')
listaDePecas.push('rodas')
listaDePecas.push('parachoque')
//listaDePecas[2] = 'Pastilha' //alterar item da lista pelo indice

if (listaDePecas.length < 10){
    console.log('É possível cadastrar mais peças!!!')
}
else{
    console.log('Não há mais espaço na caixa')
}