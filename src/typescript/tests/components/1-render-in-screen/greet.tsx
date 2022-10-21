import { GreetProps } from './greet.types'

export function Greet({ name }: GreetProps) {
  return <div>Hello {name}</div>
}
