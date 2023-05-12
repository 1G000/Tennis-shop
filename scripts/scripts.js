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
