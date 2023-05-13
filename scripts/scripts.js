import rackets from "./data.js"

function addSection() {
  const section = document.createElement("div")
  section.classList.add("items")
  const wrapper = document.querySelector(".rackets")
  wrapper.insertBefore(section, wrapper.children[1])
}
addSection()

Object.values(rackets).map((el) => {
  const card = document.createElement("div")
  card.classList.add("item")

  const cards = document.querySelector(".items")
  cards.insertBefore(card, cards.children[1])

  const itemImg = document.createElement("img")
  itemImg.classList.add("item-img")
  itemImg.src = `${el.imgUrl}`
  itemImg.alt = `${el.alt}`
  card.insertBefore(itemImg, card.children[1])

  const itemName = document.createElement("h2")
  itemName.classList.add("item-name")
  itemName.innerHTML += `${el.modelName}`
  card.insertBefore(itemName, card.children[2])

  const itemDate = document.createElement("p")
  itemDate.classList.add("item-date")
  card.insertBefore(itemDate, card.children[3])
  itemDate.innerHTML += `${el.date}`

  const buyBtn = document.createElement("button")
  buyBtn.classList.add("buy-btn")
  buyBtn.addEventListener("click", function () {
    document.querySelector("#my-modal").classList.add("open")
  })
  card.insertBefore(buyBtn, card.children[4])
  buyBtn.innerText += `Купить`
})

const closeCartBtn = document.querySelector("#close-cart")
const buyItem = document.querySelector("#buy-item")

closeCartBtn.addEventListener("click", function () {
  document.querySelector("#my-modal").classList.remove("open")
})

buyItem.addEventListener("click", function () {
  alert("Поздравляем с покупкой!")
})
