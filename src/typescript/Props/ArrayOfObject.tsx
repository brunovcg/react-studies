type ArrayOfObjectsProps = {
  names: { first: string; last: string }[]
}

const ArrayOfObject = ({ names }: ArrayOfObjectsProps) => {
  return (
    <ul>
      {names.map((item) => (
        <li key={item.first}>
          {' '}
          {item.first} {item.last}
        </li>
      ))}
    </ul>
  )
}

export default ArrayOfObject
