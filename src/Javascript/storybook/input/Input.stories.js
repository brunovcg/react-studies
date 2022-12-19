import Input from './Input'

export default {
  // Using Form/ creates a group of components, we can use without it
  title: 'Form/Input',
  component: Input,
}

export const Regular = () => <Input placeholder="my placeholder..." error="" />

export const ErrorState = () => (
  <Input placeholder="my placeholder..." error="Deu erro..." />
)
