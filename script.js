// ===== DROPDOWNS (garante que iniciem FECHADOS) =====
document.querySelectorAll(".submenu").forEach(s => {
  s.style.display = "none";
});

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(drop => {
  const btn = drop.querySelector('.menu-btn');
  const submenu = drop.querySelector('.submenu');

  if (!btn || !submenu) return;

  btn.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();

    // Fecha todos os outros
    document.querySelectorAll(".submenu").forEach(outro => {
      if (outro !== submenu) outro.style.display = "none";
    });

    // Abre/fecha o clicado
    submenu.style.display =
      submenu.style.display === "block" ? "none" : "block";
  });
});

// Clicar fora fecha tudo
document.addEventListener('click', () => {
  document.querySelectorAll('.submenu')
    .forEach(s => s.style.display = 'none');
});


// ======================= CONFIGURAÇÃO DO CARROSSEL =========================

// Lista de imagens (quantas quiser)
const imagens = [
  "imagens/gramado.jpg",
  "imagens/corredor.jpeg",
  "imagens/JIFs/principal.jpg",
  "imagens/Vôlei e Futsal no CEAGRO/volei-principal.JPG",
  "imagens/Biblioteca/principal.jpeg",
  "imagens/Jogos na área de convivência/principal.jpeg",
  "imagens/Retrato do Lanche/principal.jpg",
  "imagens/Árvores/principal.jpg",
  "imagens/Feira Vocacional/principal.jpg",
  "imagens/Festa Junina/principal.jpg",
 "imagens/Momentos Area de convivência/principal.jpg",
  "imagens/Plantação CEAGRO/principal.jpeg",
  "imagens/Jardim/5.jpg"
];

const titulos = [
  "ALUNOS INTERAGINDO NA GRAMA",
  "CORREDORES DO CAMPUS",
  "JIFS",
  "FUTSAL E VÔLEI NO CEAGRO",
  "BIBLIOTECA",
  "JOGOS NA AREA DE CONVIVÊNCIA",
  "LANCHE",
  "ÁRVORES",
  "FEIRA VOCACIONAL",
  "FESTA JUNINA",
  "MOMENTOS NA ÁREA DE CONVIVÊNCIA",
  "MOMENTOS NO CEAGRO",
  "JARDIM DO CAMPUS"
];

// Títulos em inglês (menores)
const titulosEN = [
  "Students interacting on the lawn",
  "Campus corridors",
  "JIFS Games",
  "Futsal and volleyball at CEAGRO",
  "Library",
  "Games in the recreation area",
  "Snack time",
  "Trees",
  "Vocational Fair",
  "June Festival",
  "Moments in the Recreation Area",
  "Moments at CEAGRO",
  "Campus garden"
];


const links = [
  "gramado.html",
  "corredor.html",
  "jifs.html",
  "volei.html",
  "biblioteca.html",
  "areajogos.html",
  "lanche.html",
  "arvore.html",
  "feira.html",
  "junina.html",
  "momentos.html",
  "ceagro.html",
  "jardim.html"
];

let indice = 0;

const fotoEsq = document.querySelector(".foto-esquerda");
const fotoPrin = document.querySelector(".foto-principal");
const fotoDir = document.querySelector(".foto-direita");

const linkEsq = document.getElementById("link-esquerda");
const linkPrin = document.getElementById("link-principal");
const linkDir = document.getElementById("link-direita");

const titulo = document.querySelector(".subtitulo");

function atualizar() {
  if (!fotoPrin) return;

  fotoPrin.src = imagens[indice];
  linkPrin.href = links[indice];
  titulo.innerHTML = `
  ${titulos[indice]}<br>
  <span class="titulo-ingles">${titulosEN[indice]}</span>
`;


  let ant = (indice - 1 + imagens.length) % imagens.length;
  fotoEsq.src = imagens[ant];
  linkEsq.href = links[ant];

  let prox = (indice + 1) % imagens.length;
  fotoDir.src = imagens[prox];
  linkDir.href = links[prox];
}

atualizar();

// movimento
function slide(direcao) {
  indice = direcao === "direita"
    ? (indice + 1) % imagens.length
    : (indice - 1 + imagens.length) % imagens.length;

  atualizar();
}

const setaDireita = document.querySelector(".direita");
const setaEsquerda = document.querySelector(".esquerda");

if (setaDireita) setaDireita.onclick = () => slide("direita");
if (setaEsquerda) setaEsquerda.onclick = () => slide("esquerda");


// ======================= MODAL DE IMAGENS DO ÁLBUM =========================

// Criar modal apenas uma vez
let modal = document.querySelector(".modal-imagem");

if (!modal) {
  modal = document.createElement("div");
  modal.classList.add("modal-imagem");
  modal.innerHTML = `
      <span class="fechar-modal">✖</span>
      <img class="imagem-expandida">
  `;
  document.body.appendChild(modal);
}

const modalImg = modal.querySelector(".imagem-expandida");
const fecharModalBtn = modal.querySelector(".fechar-modal");

// Ativar zoom para todas as imagens de todos os álbuns
function ativarZoom() {
  document.querySelectorAll(".foto-grid").forEach(img => {
    img.addEventListener("click", () => {
      modalImg.src = img.src;
      modal.classList.add("ativo");
    });
  });
}

ativarZoom();

// fechar modal ao clicar no X
fecharModalBtn.addEventListener("click", () => {
  modal.classList.remove("ativo");
});

// fechar ao clicar fora
modal.addEventListener("click", e => {
  if (e.target === modal) modal.classList.remove("ativo");
});
