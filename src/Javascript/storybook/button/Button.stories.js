import Button from './Button.jsx'

export default {
  title: 'Form/Button',
  component: Button,
}

export const Primary = () => (
  <Button
    onClick={() => console.log('Testando Storybook')}
    variant="primary"
    title="primary button"
  />
)

export const Success = () => (
  <Button
    onClick={() => console.log('Testando Storybook')}
    variant="success"
    title="success button"
  />
)

export const Danger = () => (
  <Button
    onClick={() => console.log('Testando Storybook')}
    variant="danger"
    title="danger button"
  />
)

export const Secondary = () => (
  <Button
    onClick={() => console.log('Testando Storybook')}
    variant="secondary"
    title="secondary button"
  />
)
