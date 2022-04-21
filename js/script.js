let base = [
  {id: 1, name: 'Чизбургер-пицца', url: 'img/cheeseburger-pizza.png',price: '395 ₽'},
  {id: 2, name: 'Сырная', url: 'img/cheese.png', price: '450 ₽'},
  {id: 3, name: 'Креветки по-азиатски', url: 'img/krevetkiAsian.png', price: '290 ₽'},
  {id: 4, name: 'Сырный цыпленок', url: 'img/cheesechicken.png', price: '385 ₽'},
  {id: 5, name: 'Чизбургер-пицца', url: 'img/cheeseburger-pizza.png',price: '395 ₽'},
  {id: 6, name: 'Сырная', url: 'img/cheese.png', price: '450 ₽'},
  {id: 7, name: 'Креветки по-азиатски', url: 'img/krevetkiAsian.png', price: '290 ₽'},
  {id: 8, name: 'Сырный цыпленок', url: 'img/cheesechicken.png', price: '385 ₽'},
]

const $selected_sort = document.querySelector('.selected_sort')
const $drop = document.querySelector('.drop')
const $popular = document.querySelector('.popular')
const $price = document.querySelector('.price')
const $alphabet = document.querySelector('.alphabet')

const $all = document.querySelector('.all')
const $meat = document.querySelector('.meat')
const $vegetrian = document.querySelector('.vegetrian')
const $gril = document.querySelector('.gril')
const $hot = document.querySelector('.hot')
const $closed = document.querySelector('.closed')

const $container = document.querySelector('.container')
const $loader = document.querySelector('.loader')



$selected_sort.addEventListener('click', e => {
  e.preventDefault()

  $drop.classList.toggle('active')
})


$popular.addEventListener('click', e => {
  e.preventDefault()

  $selected_sort.innerHTML = 'популярности'
  $drop.classList.remove('active')
})

$price.addEventListener('click', e => {
  e.preventDefault()

  $selected_sort.innerHTML = 'по цене'
  $drop.classList.remove('active')
})

$alphabet.addEventListener('click', e => {
  e.preventDefault()

  $selected_sort.innerHTML = 'по алфавиту'
  $drop.classList.remove('active')
})

$all.addEventListener('click', e => {
  e.preventDefault()

  $all.classList.add('active')
  $meat.classList.remove('active')
  $vegetrian.classList.remove('active')
  $gril.classList.remove('active')
  $hot.classList.remove('active')
  $closed.classList.remove('active')
})

$meat.addEventListener('click', e => {
  e.preventDefault()

  $all.classList.remove('active')
  $meat.classList.add('active')
  $vegetrian.classList.remove('active')
  $gril.classList.remove('active')
  $hot.classList.remove('active')
  $closed.classList.remove('active')
})

$vegetrian.addEventListener('click', e => {
  e.preventDefault()

  $all.classList.remove('active')
  $meat.classList.remove('active')
  $vegetrian.classList.add('active')
  $gril.classList.remove('active')
  $hot.classList.remove('active')
  $closed.classList.remove('active')
})

$gril.addEventListener('click', e => {
  e.preventDefault()

  $all.classList.remove('active')
  $meat.classList.remove('active')
  $vegetrian.classList.remove('active')
  $gril.classList.add('active')
  $hot.classList.remove('active')
  $closed.classList.remove('active')
})

$hot.addEventListener('click', e => {
  e.preventDefault()

  $all.classList.remove('active')
  $meat.classList.remove('active')
  $vegetrian.classList.remove('active')
  $gril.classList.remove('active')
  $hot.classList.add('active')
  $closed.classList.remove('active')
})

$closed.addEventListener('click', e => {
  e.preventDefault()

  $all.classList.remove('active')
  $meat.classList.remove('active')
  $vegetrian.classList.remove('active')
  $gril.classList.remove('active')
  $hot.classList.remove('active')
  $closed.classList.add('active')
})

function cardTemplate(base){
  console.log(base);
  const template = base.map(({name, url, price}) => {
    return `
      <div class="card">
        <div class="card-image">
          <img src="${url}">
        </div>
        <div class="card-body">
          <h1>${name}</h1>
          <div class="select_form">
            <div class="thickness">
              <li class="thin">Тонкое</li>
              <li class="tradition">Традиционное</li>
            </div>
            <div class="size">
              <li class="cm26">26 см.</li>
              <li class="cm30">30 см.</li>
              <li class="cm40">40 см.</li>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <h2>от: ${price}</h2>
          <button>+ Добавить</button>
        </div>
      </div>
    `
  }).join('')

  $container.innerHTML = template
}

cardTemplate(base)

// window.addEventListener('load', base => {
//   $loader.innerHTML = `<img src='https://icons8.com/preloaders/preloaders/327/Pizza%20spinning.gif'/>`

//   setTimeout(() => {
//     cardTemplate(base)
//   }, 1000)
// })

const $thin = document.querySelector('.thin')
const $tradition = document.querySelector('.tradition')
const $cm26 = document.querySelector('.cm26')
const $cm30 = document.querySelector('.cm30')
const $cm40 = document.querySelector('.cm40')


$thin.addEventListener('click', e => {
  e.preventDefault()

  $thin.classList.add('active')
  $tradition.classList.remove('active')
})

$tradition.addEventListener('click', e => {
  e.preventDefault()

  $thin.classList.remove('active')
  $tradition.classList.add('active')
})

$cm26.addEventListener('click', e => {
  e.preventDefault()

  $cm26.classList.add('active')
  $cm30.classList.remove('active')
  $cm40.classList.remove('active')
})

$cm30.addEventListener('click', e => {
  e.preventDefault()

  $cm26.classList.remove('active')
  $cm30.classList.add('active')
  $cm40.classList.remove('active')
})

$cm40.addEventListener('click', e => {
  e.preventDefault()

  $cm26.classList.remove('active')
  $cm30.classList.remove('active')
  $cm40.classList.add('active')
})