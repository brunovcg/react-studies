import Button from './Button.jsx'
import Center from '../decorators/Center.jsx'

export default {
  title: 'Form/Button',
  //! Using Form/ creates a group of components, we can use without it
  //! Using / and / creates a folder inside the group
  component: Button,
  // ! Decorator for all stories of Button, for global decorator, check on .storybook on root folder
  decorators: [(story) => <Center>{story()}</Center>],

  //! here we can pass Args and make it used for all stories
  // args: {
  //   children: 'Button Args'
  // }
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

//! Centering without a decorator
// export const Centered = () => (
//   <Center>
//     <Button variant="secondary" title="secondary button" />
//   </Center>
// )

//! This way we can rename
Primary.storyName = 'Primary Button'

//! Using args -

const Template = (args) => <Button {...args} />

export const PrimaryArgs = Template.bind({})
PrimaryArgs.args = {
  variant: 'primary',
  title: 'Primary Args',
}

//? Extending....
export const ExtendingPrimaryArgs = Template.bind({})
ExtendingPrimaryArgs.args = {
  ...PrimaryArgs,
  title: 'Primary Extended',
}

export const SuccessArgs = Template.bind({})
SuccessArgs.args = {
  variant: 'success',
  title: 'Success Args',
}
