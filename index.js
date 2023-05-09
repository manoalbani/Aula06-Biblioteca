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
            pesquisarLivro();
            break;                
        default:
            break;
    }
}

function cadastrarLivro(){
    executarMenu();
};

function pesquisarLivro(){
    executarMenu();
};

function excluirLivro(){
    executarMenu();
};

function alterarLivro(){
    executarMenu();
};


executarMenu();