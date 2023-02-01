function clicou() {
  const menu = document.querySelector('nav');
  const imgLogo = document.querySelector('.img-icone');
  const infoUser = document.querySelector('.info-user');
  const footerNav = document.querySelector('.footer-nav');
  document.querySelectorAll('.text-p').forEach(function(element){
    element.classList.toggle('add-block');
  })

  menu.classList.toggle('add-nav');
  imgLogo.classList.toggle('add-block');
  infoUser.classList.toggle('add-flex');
  footerNav.classList.toggle('padding');
}