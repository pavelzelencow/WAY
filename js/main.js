window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  };

  // Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.menu__btn')
  const menu = document.querySelector('.menu__list')
  const userMenu = document.querySelector('.user-nav__items')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('burger')
      userMenu.classList.add('user-nav__items--active')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('burger')
      userMenu.classList.remove('user-nav__items--active')
      body.classList.remove('locked')
    }
  })
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 767.98) {
      menu.classList.remove('active')
      burger.classList.remove('burger')
      userMenu.classList.remove('user-nav__items--active')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()