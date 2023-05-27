import { rackets, sneakers, bags } from "./data.js"

function addSection(wrapper) {
  const section = document.createElement("ul")
  section.classList.add("items")
  wrapper.append(section)
  return section
}

function createItems(items, container) {
  items.forEach((el) => {
    const card = document.createElement("li")
    card.classList.add("item")
    container.append(card)

    const itemImg = document.createElement("img")
    itemImg.classList.add("item-img")
    itemImg.src = `${el.imgUrl}`
    itemImg.alt = `${el.alt}`
    card.append(itemImg)

    const itemName = document.createElement("h3")
    itemName.classList.add("item-name")
    itemName.append(el.modelName)
    card.append(itemName)

    const dateField = document.createElement("div")
    dateField.classList.add("date-field")
    card.append(dateField)

    const dateTitle = document.createElement("p")
    const dateValue = document.createElement("p")
    dateField.classList.add("date-field")
    dateValue.classList.add("date-value")
    dateTitle.classList.add("date-title")
    dateField.append(dateTitle)
    dateField.append(dateValue)
    dateTitle.append(`Дата добавления на сайт:`)
    dateValue.append(el.date)

    const buyBtn = document.createElement("button")
    buyBtn.classList.add("buy-btn")
    buyBtn.addEventListener("click", function () {
      const orderName = document.querySelector("#my-modal .order-name")
      orderName.innerHTML = el.modelName

      document.querySelector("#my-modal").classList.add("open")
    })
    card.append(buyBtn)
    buyBtn.append("Купить")
  })
}

const racketsContainer = addSection(document.querySelector(".rackets"))
const sneakersContainer = addSection(document.querySelector(".sneakers"))
const bagsContainer = addSection(document.querySelector(".bags"))

createItems(rackets, racketsContainer)
createItems(sneakers, sneakersContainer)
createItems(bags, bagsContainer)

const closeCartBtn = document.querySelector("#close-cart")
const buyItem = document.querySelector("#my-modal")

closeCartBtn.addEventListener("click", function () {
  document.querySelector("#my-modal").classList.remove("open")
})

buyItem.addEventListener("submit", function (event) {
  event.preventDefault()
  alert("Поздравляем с покупкой!")
  event.currentTarget.reset()
  event.currentTarget.classList.remove("open")
})

const switcher = document.querySelector(".switch")
switcher.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme")
})

const showOnPx = 100
const backToTopButton = document.querySelector(".back-to-top")

function scrollContainer() {
  return document.documentElement || document.body
}

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
})

const goToTop = () => {
  document.body.scrollIntoView({ behavior: "smooth" })
}
backToTopButton.addEventListener("click", goToTop)
