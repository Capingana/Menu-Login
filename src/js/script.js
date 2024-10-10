const hamburguer = document.querySelector("#hamburguer");
const itens = document.querySelector("#itens");
// ==============================================================
hamburguer.addEventListener("click", (evento) => {
  if (itens.style.display == "none") {
    itens.style.display = "block";
    hamburguer.src = "./src/img/close.png";
  } else {
    itens.style.display = "none";
    hamburguer.src = "./src/img/menu.png";
  }
});

// ============================================================

function onresize() {
  if (window.innerWidth >= 768) {
    itens.style.display = "block";
    hamburguer.src = "./src/img/close.png";
  } else {
    itens.style.display = "none";
    hamburguer.src = "./src/img/menu.png";
  }
}
