const fs = require('fs')

const produto = {
    nome: "Notebook",
    preco: 4249.99,
    desconto: 0.25
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err =>{
    console.log(err || 'Arquio salvo!')
}
)