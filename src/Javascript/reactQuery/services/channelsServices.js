import axios from 'axios'

const channelsServices = {
  getChannelById (id) {
    return axios.get(`http://localhost:4000/channels/${id}`)
  },
}

export default channelsServices
