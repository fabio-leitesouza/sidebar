/* Definir a largura da barra lateral para px e a margem esquerda do conteúdo da página para px */
function openNav() {
  
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Definir a largura da barra lateral como 0 e a margem esquerda do conteúdo da página como 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "50px";
  document.getElementById("main").style.marginLeft = "50px";
}
