import axios from 'axios'

const ColorsServices = {
  getColors(page) {
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${page}`)
  },
}

export default ColorsServices
