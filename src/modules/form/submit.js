import dayjs from "dayjs"
// Elementos do form
const selectedDate = document.getElementById("date")

// Data atual
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual e define a data mínima sendo a data atual
selectedDate.value = inputToday
selectedDate.min = inputToday