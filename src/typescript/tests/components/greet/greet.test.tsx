import { render, screen } from '@testing-library/react'
import { Greet } from './greet'


  test('renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
  })

  test('Greed renders with a name',()=>{
    render(<Greet name="bruno"/>)
    const textElement = screen.getByText(/hello bruno/i)
    expect(textElement).toBeInTheDocument()
  })