import { getHours } from 'date-fns'

export function returnMessageLogin() {
  const hours = getHours(new Date())
  if (hours >= 6 && hours < 12) {
    return 'um Bom Dia!'
  } else if (hours >= 12 && hours < 18) {
    return 'uma Boa Tarde!'
  } else {
    return 'uma Boa Noite!'
  }
}
