import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
dayjs.locale('pt-br')

export const formatDate = (date) => {
  const day = dayjs(date)

  return `${day.format('D')} de ${day.format('MMMM')} de ${day.format('YYYY')}`
}
