import { Button } from '@chakra-ui/react'
import { ThemeProvider, theme, CSSReset, Box } from '@chakra-ui/react'

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
  argTypes:{
    onClick: {action: 'clicked'}
  }
}

const Template = (args) => <Button {...args} />

export const Success = () => <Button colorScheme="teal">Success</Button>
export const Danger = () => <Button colorScheme="red">Danger</Button>

export const ArgsSuccess = Template.bind({})

ArgsSuccess.args = {
  colorScheme: 'blue',
  children: 'My Args',
}
