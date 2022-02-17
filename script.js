const arrayProdutos = [
    
    {
        img: "./imagens/gorro.png",
        nome: "Black Hat", 
        categoria: "Acessórios",
        descrição: "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
        valor: "R$100.00",
        botao: "Adicionar ao carrinho"
    },

    {
        img: "./imagens/mascara.png",
        nome: "Mask", 
        categoria: "Acessórios",
        descrição: "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
        valor: "R$40.00",
        botao: "Adicionar ao carrinho",
    },

    {
        img: "./imagens/camiseta.png",
        nome: "T-Shirt", 
        categoria: "Camisetas",
        descrição: "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
        valor: "R$100.00",
        botao: "Adicionar ao carrinho",
    },

    {
        img: "./imagens/camiseta-branca.png",
        nome: "Short-Sleeve T-Shirt", 
        categoria: "Camisetas",
        descrição: "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
        valor: "R$100.00",
        botao: "Adicionar ao carrinho",
    },

    {
        img: "./imagens/jaqueta-moto.png",
        nome: "Champion Packable Jacket", 
        categoria: "Camisetas",
        descrição: "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
        valor: "R$100.00",
        botao: "Adicionar ao carrinho"
    }
]

function criarCardsProdutos (){
    const cardsProdutos = document.querySelector(".produtos")

    for(let cont = 0; cont <= arrayProdutos.length - 1; cont++){

        const divGrid = document.createElement("div");
        divGrid.className = "gridContainer"
        cardsProdutos.appendChild(divGrid);
        
        const novoCard = document.createElement("div");
        divGrid.appendChild(novoCard);
        novoCard.className = `imagemProduto imagemProduto${cont}`;

        const figura = document.createElement("figure");
        novoCard.appendChild(figura);

        const imgProduto = document.createElement("img");
        figura.appendChild(imgProduto);
        imgProduto.src = arrayProdutos[cont].img;
        figura.appendChild(imgProduto);

        const novoCardDetalhes = document.createElement("div");
        divGrid.appendChild(novoCardDetalhes);
        novoCardDetalhes.className = `detalhesProduto detalhesProduto${cont}`;

        const listaProdutos = document.createElement("ul");
        novoCardDetalhes.appendChild(listaProdutos);

        const listaProdutosDetalhes = document.createElement("li");
        listaProdutos.appendChild(listaProdutosDetalhes);
        listaProdutosDetalhes.className = "listaProdutos";

        const spanTituloProduto = document.createElement("span");
        spanTituloProduto.className = "tituloSpan";
        spanTituloProduto.innerText = arrayProdutos[cont].categoria;
        listaProdutosDetalhes.appendChild(spanTituloProduto);

        const tituloProduto = document.createElement("h2");
        tituloProduto.innerText = arrayProdutos[cont].nome;
        listaProdutosDetalhes.appendChild(tituloProduto);

        const descricaoProduto = document.createElement("h3");
        descricaoProduto.innerText = arrayProdutos[cont].descrição;
        listaProdutosDetalhes.appendChild(descricaoProduto);

        const spanValor = document.createElement("span");
        spanValor.innerText = arrayProdutos[cont].valor;
        listaProdutosDetalhes.appendChild(spanValor);

        const botaoAdcCarrinho = document.createElement("a");
        botaoAdcCarrinho.innerText = arrayProdutos[cont].botao;
        botaoAdcCarrinho.className = "adcCarrinho";
        botaoAdcCarrinho.id = "addCarrinho";
        listaProdutosDetalhes.appendChild(botaoAdcCarrinho);

    }
} criarCardsProdutos();

