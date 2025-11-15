const listaContainer = document.getElementById("lista-livros");
const campoBusca = document.getElementById("campo-busca");
const modal = document.getElementById("modal-carrinho");
const carrinhoLista = document.getElementById("carrinho-lista");
const carrinhoTotal = document.getElementById("carrinho-total");
const contadorCarrinho = document.getElementById("contador-carrinho");

let carrinho = [];

const livros = [
  {id:1,titulo:"Dom Casmurro",autor:"Machado de Assis",resumo:"O clássico do ciúme e da memória.",preco:29.9,imagem:"https://picsum.photos/220/280?1"},
  {id:2,titulo:"Grande Sertão: Veredas",autor:"Guimarães Rosa",resumo:"Explora filosofia e o sertão.",preco:45.5,imagem:"https://picsum.photos/220/280?2"},
  {id:3,titulo:"Capitães da Areia",autor:"Jorge Amado",resumo:"A vida de meninos de rua.",preco:35.0,imagem:"https://picsum.photos/220/280?3"},
];

const formatar = valor => valor.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});

function renderizarLivros(lista){
  listaContainer.innerHTML="";
  if(lista.length===0){document.querySelector("#sem-resultados").style.display="block";return;}
  document.querySelector("#sem-resultados").style.display="none";
  lista.forEach(l=>{
    listaContainer.innerHTML+=`
      <div class="card">
        <img src="${l.imagem}" alt="${l.titulo}">
        <h3>${l.titulo}</h3>
        <p><strong>${l.autor}</strong></p>
        <p>${l.resumo}</p>
        <p class="preco">${formatar(l.preco)}</p>
        <button onclick="add(${l.id})">Comprar</button>
      </div>
    `;
  });
}

function add(id){
  const livro = livros.find(l=>l.id===id);
  carrinho.push(livro);
  contadorCarrinho.textContent=carrinho.length;
}

function atualizarCarrinho(){
  carrinhoLista.innerHTML=carrinho.map(l=>`<li>${l.titulo}<span>${formatar(l.preco)}</span></li>`).join("");
  const total = carrinho.reduce((s,l)=>s+l.preco,0);
  carrinhoTotal.textContent="Total: "+formatar(total);
}

document.getElementById("carrinho-info").onclick = () => { atualizarCarrinho(); modal.style.display="block"; }
document.querySelector(".fechar").onclick = () => modal.style.display="none";

campoBusca.addEventListener("input", ()=>{
  const termo = campoBusca.value.toLowerCase();
  const filtrados = livros.filter(l => l.titulo.toLowerCase().includes(termo) || l.autor.toLowerCase().includes(termo));
  renderizarLivros(filtrados);
});

document.addEventListener("DOMContentLoaded", ()=>renderizarLivros(livros));
