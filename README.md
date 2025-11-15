<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Libris Digital – Leitura sem Distrações</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<!-- Modal Carrinho -->
<div id="modal-carrinho" class="modal">
  <div class="modal-content">
    <span class="fechar">×</span>
    <h2>Seu Carrinho</h2>
    <ul id="carrinho-lista"><li>O carrinho está vazio.</li></ul>
    <p id="carrinho-total">Total: R$ 0,00</p>
    <button id="btn-finalizar" disabled>Finalizar Compra</button>
  </div>
</div>

<!-- Header -->
<header>
  <div class="logo">📚 Libris Digital</div>
  <nav>
    <ul>
      <li><a href="#inicio">Início</a></li>
      <li><a href="#catalogo">Catálogo</a></li>
      <li><a href="#clube">Clube</a></li>
      <li><a href="#sobre">Sobre</a></li>
      <li><a href="#contato">Contato</a></li>
    </ul>
  </nav>
  <div id="carrinho-info">Carrinho <span id="contador-carrinho">0</span></div>
</header>

<!-- Busca -->
<div class="barra-pesquisa">
  <input id="campo-busca" type="text" placeholder="Buscar livros...">
  <button id="btn-buscar">Buscar</button>
</div>

<!-- Hero -->
<section id="inicio" class="hero">
  <h1>A leitura digital sem ruídos visuais</h1>
  <p>Interface limpa, suave e projetada para o foco.</p>
</section>

<!-- Catálogo -->
<section id="catalogo" class="catalogo">
  <h2>Catálogo em Destaque</h2>
  <div class="livros" id="lista-livros"></div>
  <div id="sem-resultados" style="display:none; margin-top:40px; color:#d1d1d1;">
    Nenhum livro encontrado.
  </div>
</section>

<!-- Clube -->
<section id="clube" class="clube">
  <h2>Clube de Leitura</h2>
  <p>Participe de discussões, resenhas e encontros.</p>
  <a class="btn" href="#contato">Inscreva-se</a>
</section>

<!-- Sobre -->
<section id="sobre" class="sobre">
  <h2>Sobre a Libris Digital</h2>
  <p>Plataforma focada em ergonomia cognitiva, contraste suave e leitura confortável.</p>
</section>

<!-- Contato -->
<section id="contato" class="contato">
  <h2>Fale Conosco</h2>
  <form id="form-contato">
    <input type="text" required placeholder="Seu nome">
    <input type="email" required placeholder="Seu e-mail">
    <textarea required placeholder="Sua mensagem"></textarea>
    <button type="submit">Enviar</button>
  </form>
</section>

<footer>
  <p>© 2025 Libris Digital – Todos os direitos reservados</p>
</footer>

<script src="app.js"></script>
</body>
</html>

:root {
  --fundo-principal: #272323;
  --fundo-secundario: #1f1b1b;
  --texto-claro: #ffffff;
  --texto-suave: #d1d1d1;
  --destaque-roxo: #b79dff;
  --fundo-card: #1f1b1b;
  --borda-suave: #3c3636;
}

*{margin:0;padding:0;box-sizing:border-box;font-family:"Segoe UI",sans-serif;}
body{background:var(--fundo-principal);color:var(--texto-claro);overflow-x:hidden;}
header{background:var(--fundo-secundario);padding:12px 15px;display:flex;flex-direction:column;align-items:flex-start;border-bottom:2px solid var(--destaque-roxo);}
header .logo{font-size:1.5em;font-weight:700;margin-bottom:8px;}
nav ul{display:flex;flex-direction:column;gap:10px;list-style:none;}
nav a{color:var(--texto-claro);text-decoration:none;font-size:1em;transition:.3s;}
nav a:hover{color:var(--destaque-roxo);}
#carrinho-info{margin-top:8px;cursor:pointer;display:flex;gap:5px;font-size:1.1em;}
#contador-carrinho{background:var(--destaque-roxo);color:black;font-weight:bold;padding:3px 6px;border-radius:50%;}

/* Busca */
.barra-pesquisa{display:flex;flex-direction:column;gap:8px;padding:12px;background:var(--fundo-secundario);border-bottom:1px solid var(--borda-suave);}
.barra-pesquisa input{width:100%;padding:10px;background:#322e2e;color:var(--texto-suave);border:1px solid var(--borda-suave);border-radius:8px;}
.barra-pesquisa button{background:var(--destaque-roxo);border:none;padding:10px;font-weight:bold;border-radius:8px;color:black;cursor:pointer;transition:.3s;}
.barra-pesquisa button:hover{filter:brightness(1.2);}

/* Hero */
.hero{text-align:center;padding:60px 15px;}
.hero h1{font-size:2em;font-weight:700;}
.hero p{margin-top:8px;color:var(--texto-suave);font-size:1em;}

/* Catálogo */
.catalogo{padding:40px 15px;text-align:center;}
.catalogo h2{font-size:1.8em;margin-bottom:25px;border-left:6px solid var(--destaque-roxo);padding-left:12px;text-align:left;width:fit-content;margin:0 auto 25px;}
.livros{display:flex;flex-direction:column;gap:20px;}
.card{background:var(--fundo-card);width:100%;padding:15px;border-radius:12px;text-align:left;border:1px solid var(--borda-suave);transition:.35s;}
.card:hover{border-color:var(--destaque-roxo);transform:translateY(-4px);}
.card img{width:100%;height:250px;object-fit:cover;border-radius:8px;}
.card h3{margin-top:10px;font-size:1.1em;}
.card p{margin-top:6px;font-size:0.9em;color:var(--texto-suave);}
.card .preco{margin-top:8px;font-size:1.1em;color:var(--destaque-roxo);font-weight:bold;}
.card button{margin-top:10px;width:100%;background:var(--destaque-roxo);border:none;padding:10px;font-weight:bold;cursor:pointer;border-radius:8px;color:black;}

/* Clube e contato */
.clube, .contato{background:var(--fundo-secundario);padding:40px 15px;border-top:1px solid var(--borda-suave);}
.clube .btn{background:var(--destaque-roxo);color:black;padding:10px 22px;font-weight:bold;border-radius:8px;text-decoration:none;display:inline-block;margin-top:12px;}
.contato form{max-width:100%;display:flex;flex-direction:column;gap:12px;margin:auto;}
.contato input, .contato textarea{padding:10px;background:#322e2e;color:var(--texto-suave);border:1px solid var(--borda-suave);border-radius:8px;}

/* Footer */
footer{text-align:center;padding:20px;background:var(--fundo-secundario);border-top:2px solid var(--destaque-roxo);}

/* Modal Carrinho */
.modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:20;}
.modal-content{background:var(--fundo-card);border:1px solid var(--destaque-roxo);width:90%;max-width:500px;margin:10% auto;padding:25px;border-radius:12px;}
.fechar{float:right;font-size:25px;cursor:pointer;}
#carrinho-lista li{padding:10px 0;border-bottom:1px dashed var(--borda-suave);display:flex;justify-content:space-between;}
#btn-finalizar{width:100%;background:var(--destaque-roxo);border:none;padding:12px;border-radius:8px;margin-top:15px;font-weight:bold;cursor:pointer;color:black;}

