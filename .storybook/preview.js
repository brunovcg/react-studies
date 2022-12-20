//! used on old version
// import {addDecorator} from '@storybook/react'
// import Center from './../src/Javascript/storybook/decorators/Center'
import React from 'react'
// import { ThemeProvider, theme, CSSReset, Box } from '@chakra-ui/react'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
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
