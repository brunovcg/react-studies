//! used on old version
import { addDecorator, addParameters } from '@storybook/react'
import { withConsole } from '@storybook/addon-console'
import { withKnobs } from '@storybook/addon-knobs'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withA11y } from '@storybook/addon-a11y'

// import Center from './../src/Javascript/storybook/decorators/Center'
// import { ThemeProvider, theme, CSSReset, Box } from '@chakra-ui/react'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  // a11y: {
  //   element: '../src/Javascript/storybook',
  //   config: {},
  //   options: {},
  //   disabled: true,
  // },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  //! Add this for alphabetical order of groups
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
}

// ! THIS IS A GLOBAL DECORATOR, used on old versions
// addDecorator(story=> <Center>{story()}</Center>)
addDecorator((storyFn, context) => withConsole()(storyFn)(context))
addDecorator(withKnobs)

//! DEPRECATED
addDecorator(withA11y)

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})

//! New way to do theming
// export const decorators = [
//   (Story) => (
//     <ThemeProvider theme={theme}>
//       <CSSReset />
//       <Box m="4">
//         <Story />
//       </Box>
//     </ThemeProvider>
//   ),
// ]
