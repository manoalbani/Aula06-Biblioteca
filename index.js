// ⦁ Crie um programa de cadastro de uma biblioteca (utilizando array como base de dados ex: baseDeLivros: [ob1, obj2,]).  
// O programa deve implementar as funcionalidades descritas na figura abaixo:
 
// (1) - Cadastrar;
// (2) - Pesquisar;
// (3) - Excluir;
// (4) - Alterar; (desafio)
// (5) - Filtrar livros por categoria (desafio)
// (0) - Sair;

// O cadastro dos livros deve solicitar  código, título, categoria. O programa deve respeitar as seguintes restrições:
// ⦁ Não se pode cadastrar um livro com mesmo código;
// ⦁ A pesquisa deve ser feita pelo código;
// ⦁ A exclusão deve ser feita pelo código do livro;

let baseDeLivros = [];


function executarMenu(){
    let opcao = prompt(`
        (1) - Cadastrar;
        (2) - Pesquisar;
        (3) - Excluir;
        (4) - Alterar; (desafio)
        (5) - Filtrar livros por categoria (desafio)
        (0) - Sair; 
    `);

    switch (opcao) {
        case "1": 
            cadastrarLivro();
            break;    
        case "2":
            pesquisarLivro();
            break;    
        case "3":
            excluirLivro();
            break;                
        case "4":
            alterarLivro();
            break;                
        case "5":
            filtrarLivros();
            break;                
        default:
            break;
    }
}

function cadastrarLivro(){
    let codigo = prompt('Digite o Código do livro');
    while (getLivro(codigo)!=null) {
        codigo = prompt('Código já utilizado, tente outro');
    }
    let titulo = prompt('Digite o Nome do livro');
    let categoria = prompt('Digite a categoria do livro');
    let livro = {
        codigo:codigo,
        titulo:titulo,
        categoria:categoria,
        };
    baseDeLivros.push(livro);
    executarMenu();
};

function pesquisarLivro(){
    let livro = lerCodigoLivro();
    if(livro!=null){
        apresentarLivro(livro);
    }
    executarMenu();

};

function apresentarLivro(livro){
    alert(`Livro:
                Código: ${livro.codigo}
                Nome: ${livro.titulo}
                Categoria ${livro.categoria}`);
}

function getLivro(codigo){
    return baseDeLivros.find(x=>x.codigo==codigo);
}

function excluirLivro(){
    let livro = lerCodigoLivro();
    if(livro!=null){
        baseDeLivros.splice(livro,1);
    }
    executarMenu();
};

function lerCodigoLivro(){
    let codigo = prompt('Digite o Código do livro');
    let livro = getLivro(codigo);
    if(livro==null){
        alert('Livro não encontrado');
    }
    return livro;
}

function alterarLivro(){
    let livro = lerCodigoLivro();
    if(livro!=null){
        let titulo = prompt(`Digite o Nome do livro ${livro.titulo}`);
        let categoria = prompt(`Digite a categoria do livro ${livro.categoria}`);
        
        baseDeLivros.forEach(x => {
            if(x.codigo==livro.codigo){
                x.titulo = titulo;
                x.categoria = categoria;
            }
        });
    }
    executarMenu();
};

function filtrarLivros(){
        let categoria = prompt(`Digite a categoria do livro`);  
        baseDeLivros.filter(x=>x.categoria==categoria).forEach(x=>apresentarLivro(x));    
}


executarMenu();