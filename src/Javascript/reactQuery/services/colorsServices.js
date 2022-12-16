import axios from 'axios'

const ColorsServices = {
  getColorsPaginated(page) {
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${page}`)
  },
  getColors({pageParam = 1}) {
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`)
  },
}

export default ColorsServices
