type ListProps<T> = {
  items: T[]
  onClick: (value: T) => void
}

const List = <
  T extends {
    // id: number
  }
>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h4>List of Items</h4>

      {items.map((item, index) => (
        <div key={index} onClick={() => onClick(item)}>
          {JSON.stringify(item)}
        </div>
      ))}
    </div>
  )
}

export default List
