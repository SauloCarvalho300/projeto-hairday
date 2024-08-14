import dayjs from "dayjs"
// Elementos do form
const form = document.querySelector("form")
const clientname = document.getElementById("client")
const selectedDate = document.getElementById("date")

// Data atual
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual e define a data mínima sendo a data atual
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = (event) => {
  // previne o comportamento padrão de recarregar a página
  event.preventDefault()

  try {
    // Recuperando o nome do cliente
    const name = clientName.value

    if (!name) {
      return alert("Informe o nome do cliente.")
    }
    // Recupera o horário selecionado
    const hourSelected = document.querySelector(".hour-selected")

    console.log("agendamento cadastrado");

    if (!hourSelected) {
      return alert("Selecione a hora.")
    }

    // Recuperar somente a hora
    const [hour] = hourSelected.innerText.split(":")
    // Inserir a hora na data do input de data
    const when = dayjs(selectedDate.value).add(hour, "hour")
    // Gerar o ID
    const id = new Date().getTime()

    console.log({
      id,
      name,
      when
    });
    
    
  } catch (error) {
    alert("Não foi possível agendar, tente novamente mais tarde.")
    console.log(error); 
  }
}