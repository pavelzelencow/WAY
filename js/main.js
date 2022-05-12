// Preloader
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 100);
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

// Accordion
function accordion() {
  const items = document.querySelectorAll('.question__item-trigger')
  items.forEach(item => {
      item.addEventListener('click', () => {
          const parent = item.parentNode
          if (parent.classList.contains('question__item-active')) {
              parent.classList.remove('question__item-active')
          } else {
              document
                  .querySelectorAll('.question__item')
                  .forEach(child => child.classList.remove('question__item-active'))   
              parent.classList.add('question__item-active')
          }
      })
  })
}
accordion() 

// Filters tab
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')
      

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc =>{
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

        tabs.forEach(t =>{
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})


