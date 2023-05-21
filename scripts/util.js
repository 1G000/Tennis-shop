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
  let dayNumber = t.getDay()
  let date = t.getDate()
  let weekOfMonth = Math.ceil((date - dayNumber) / 7)

  return `${dayName}, ${weekOfMonth} неделя ${month} ${year} года`
}
