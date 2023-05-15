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
    card.insertBefore(itemImg, card.children[1])

    const itemName = document.createElement("h3")
    itemName.classList.add("item-name")
    itemName.append(el.modelName)
    card.insertBefore(itemName, card.children[2])

    const itemDate = document.createElement("p")
    itemDate.classList.add("item-date")
    card.insertBefore(itemDate, card.children[3])
    itemDate.append(el.date)

    const buyBtn = document.createElement("button")
    buyBtn.classList.add("buy-btn")
    buyBtn.addEventListener("click", function () {
      document.querySelector("#my-modal").classList.add("open")
    })
    card.insertBefore(buyBtn, card.children[4])
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
  alert("Поздравляем с покупкой!")
  event.currentTarget.reset()
  event.currentTarget.classList.remove("open")
})

const switcher = document.querySelector(".switch")
switcher.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme")
})