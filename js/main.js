// Header: reforça o fundo depois que a página começa a rolar
const header = document.getElementById("header");
const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 10);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Pré-carrega as imagens de hover para a troca ser instantânea
document.querySelectorAll(".swap .img-hover").forEach((img) => {
  const pre = new Image();
  pre.src = img.src;
});

// Em telas sem mouse (celular), o toque alterna a imagem
if (window.matchMedia("(hover: none)").matches) {
  document.querySelectorAll(".swap").forEach((el) => {
    el.addEventListener("click", () => el.classList.toggle("is-swapped"));
  });
}
