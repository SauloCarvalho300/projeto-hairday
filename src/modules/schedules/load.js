import { hoursLoad } from "../form/hours-load";

// Seleciona o input de data  
const selectedDate = document.getElementById("date")

export async function schedulesDay() {
  // Buscar na API os agendamentos para carregar do lado direito da tela.

  // Obtém a data do imput
  const date =  selectedDate.value
  // Renderiza as horas disponíveis
  hoursLoad({ date })
}