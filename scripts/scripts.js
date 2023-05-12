const rackets = [
  {
    modelName: "Babolat Pure Strike 16/19",
    imgUrl: "../img/babolat-pure-strike-16-19.jpg",
    date: "12.05.2023",
  },
  {
    modelName: "Babolat Pure Strike Team",
    imgUrl: "../img/Babolat Pure Strike Team.jpg",
    date: "13.05.2023",
  },
]

const buyBtn = document.querySelector("#buy-btn")
const closeCartBtn = document.querySelector("#close-cart")
const buyItem = document.querySelector("#buy-item")

buyBtn.addEventListener("click", function () {
  document.querySelector("#my-modal").classList.add("open")
})

closeCartBtn.addEventListener("click", function () {
  document.querySelector("#my-modal").classList.remove("open")
})

buyItem.addEventListener("click", function () {
  alert("Поздравляем с покупкой!")
})
