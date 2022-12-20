import { Button } from '@chakra-ui/react'
import { ThemeProvider, theme, CSSReset, Box } from '@chakra-ui/react'
import { action, actions } from '@storybook/addon-actions'
import { text, boolean } from '@storybook/addon-knobs'

export default {
  title: 'Chakra/Button',
  component: Button,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Box m="4">
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

const Template = (args) => <Button {...args} />

export const SuccessAddOnAction = () => (
  <Button onClick={action('Click handler')} colorScheme="teal">
    Success
  </Button>
)
export const DangerAddOnActions = () => (
  <Button {...actions('onClick', 'onMouseOver')} colorScheme="red">
    Danger
  </Button>
)

export const ArgsSuccess = Template.bind({})

ArgsSuccess.args = {
  colorScheme: 'blue',
  children: 'My Args',
}

//! check preview to import the console add on and dont have to open browser console, but instead it appears in actions painel.
export const AddOnLog = () => (
  <Button
    colorScheme="red"
    onClick={() => console.log('button clicked', process.env.STORYBOOK_THEME)}
  >
    Log button
  </Button>
)

export const Knobs = () => (
  <Button disabled={boolean('Disabled', false)}>
    {text('Label', 'Button Label')}
  </Button>
)
