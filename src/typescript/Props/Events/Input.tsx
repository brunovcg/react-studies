type InputProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ handleChange }: InputProps) => {
  return <input type="text" onChange={handleChange} />
}

export default Input
