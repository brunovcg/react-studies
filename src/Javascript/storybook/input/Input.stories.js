import Input from './Input'

export default {
  title: 'Input',
  component: Input,
}

export const Regular = () => <Input placeholder="my placeholder..." error="" />

export const ErrorState = () => (
  <Input placeholder="my placeholder..." error="Deu erro..." />
)
