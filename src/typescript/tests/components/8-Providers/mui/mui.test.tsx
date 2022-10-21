import { render, screen } from '../test-utils'
//import { render, screen } from "@testing-library/react";
//import { AppProviders } from "../providers/AppProviders";
import { MuiMode } from './mui-mode'

//! Here we are overriding the render and screen method to say
//! this component is wrapping others that will show what is tested in screen

describe('MuiMode', () => {
  test('renders text correctly', () => {
    render(<MuiMode />)

    //render(<MuiMode />,{wrapper: AppProviders});

    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveTextContent('dark mode')
  })

  test('renders text in white color for dark mode', () => {
    render(<MuiMode />)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveStyle({ color: "'rgb(255, 255, 255)'" })
  })
})
