import axios from 'axios'

const usersService = {
  getUserByEmail (email) {
    return axios.get(`http://localhost:4000/users/${email}`)
  },
}

export default usersService
