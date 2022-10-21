type ChildrenReactNodeProps = {
  children: React.ReactNode
}

const ChildrenReactNode = ({ children }: ChildrenReactNodeProps) => {
  return <div>{children}</div>
}

export default ChildrenReactNode
