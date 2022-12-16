import axios from 'axios'


const client = axios.create({baseURL: 'http://localhost:4000'})


export const request = ({...options}) => {
 client.defaults.headers.common.Athorization = `Bearer your_token`
 const onSuccess = response => response
 const onError = error => {
    // optionally catch errors and add addional loggin here
    return error
 }
 const onSettled = (res) => {
    // do something
    return res
 }

 return client(options).then(onSuccess).catch(onError).finally(onSettled)
}