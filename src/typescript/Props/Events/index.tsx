import Input from './Input'
import Button from './Button'

const Events = () => {
  return (
    <>
      <h4>onClick Events</h4>
      <Button
        handleClick={() => {
          console.log('Cliquei')
        }}
        handleClickEvent={(event, id) => console.log(event, id)}
      />
      <h4>input Events</h4>
      <p>Olhe o console</p>
      <Input handleChange={(event) => console.log(event.target.value)} />
    </>
  )
}

export default Events
