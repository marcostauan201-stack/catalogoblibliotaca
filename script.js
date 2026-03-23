const livros = [
    { titulo: "História do Rio Grande do Sul", categoria: "pesquisa", disponivel: true },
    { titulo: "O Pequeno Príncipe", categoria: "infanto", disponivel: false },
    { titulo: "Dicionário de Inglês", categoria: "pesquisa", disponivel: true },
    { titulo: "Harry Potter e a Pedra Filosofal", categoria: "infanto", disponivel: true },
    { titulo: "Geografia Geral", categoria: "pesquisa", disponivel: false },
    { titulo: "A Turma da Mônica", categoria: "infanto", disponivel: true },
    { titulo: "Manual de Mecânica Automotiva", categoria: "pesquisa", disponivel: true }
];

function carregarCatalogo(filtro = 'todos') {
    const container = document.getElementById('catalogo');
    if(!container) return;
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

function buscarLivro() {
    let input = document.getElementById('inputBusca').value.toLowerCase();
    let cards = document.getElementsByClassName('livro');

    for (let i = 0; i < cards.length; i++) {
        let titulo = cards[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (titulo.includes(input)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

function filtrar(cat) { 
    document.getElementById('inputBusca').value = ""; // Limpa a busca ao trocar categoria
    carregarCatalogo(cat); 
}

// Inicializa o site ao carregar a página
window.onload = () => carregarCatalogo('todos');
