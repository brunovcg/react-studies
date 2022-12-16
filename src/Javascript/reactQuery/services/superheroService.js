import axios from 'axios'

export const fetchSuperHeroes = () =>
  axios.get('http://localhost:4000/superheroes')

/* export const fetchSuperHeroeById = (heroId) =>
  axios.get(`http://localhost:4000/superheroes/${heroId}`)
*/

//? We can use queryKey provided by react-query and destructure the position os the id

export const fetchSuperHeroeById = ({ queryKey }) => {
  const heroId = queryKey[1]
  return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

export const addSuperHero = (hero) =>
  axios.post('http://localhost:4000/superheroes', hero)
