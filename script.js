// LISTA DE LIVROS: Adicione novos aqui seguindo o modelo
const livros = [
    { titulo: "História do Rio Grande do Sul", categoria: "pesquisa", disponivel: true },
    { titulo: "O Pequeno Príncipe", categoria: "infanto", disponivel: false },
    { titulo: "Dicionário de Inglês", categoria: "pesquisa", disponivel: true },
    { titulo: "Harry Potter e a Pedra Filosofal", categoria: "infanto", disponivel: true },
    { titulo: "Geografia Geral", categoria: "pesquisa", disponivel: false },
    { titulo: "A Turma da Mônica", categoria: "infanto", disponivel: true }
];

function carregarCatalogo(filtro = 'todos') {
    const container = document.getElementById('catalogo');
    container.innerHTML = ""; 

    livros.forEach(livro => {
        if (filtro === 'todos' || livro.categoria === filtro) {
            const div = document.createElement('div');
            div.className = `livro ${livro.disponivel ? 'disponivel' : 'emprestado'}`;
            
            div.innerHTML = `
                <h3>${livro.titulo}</h3>
                <p>Área: ${livro.categoria.toUpperCase()}</p>
                <span class="status">${livro.disponivel ? '● Disponível' : '○ Emprestado'}</span>
            `;
            container.appendChild(div);
        }
    });
}

function filtrar(categoria) {
    carregarCatalogo(categoria);
}

// Inicia o site
window.onload = () => carregarCatalogo('todos');
