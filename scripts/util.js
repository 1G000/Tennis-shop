const months = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
]
const days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
]

export function getDayInfo(t) {
  const [dd, mm, yyyy] = t.split(".")
  t = new Date(`${yyyy}-${mm}-${dd}`)

  let year = t.getFullYear()
  let month = months[t.getMonth()]
  let dayName = days[t.getDay()]
  let date = t.getDate()

  let firstDay = new Date(`${yyyy}-${mm}-01`).getDay()
  let weekOfMonth
  if (firstDay == 2) {
    weekOfMonth = Math.ceil((date + 1) / 7)
  } else if (firstDay == 3) {
    weekOfMonth = Math.ceil((date + 2) / 7)
  } else if (firstDay == 4) {
    weekOfMonth = Math.ceil((date + 3) / 7)
  } else if (firstDay == 5) {
    weekOfMonth = Math.ceil((date + 4) / 7)
  } else if (firstDay == 6) {
    weekOfMonth = Math.ceil((date + 5) / 7)
  } else if (firstDay == 0) {
    weekOfMonth = Math.ceil((date + 6) / 7)
  } else {
    weekOfMonth = Math.ceil(date / 7)
  }

  return `${dayName}, ${weekOfMonth} неделя ${month} ${year} года `
}
