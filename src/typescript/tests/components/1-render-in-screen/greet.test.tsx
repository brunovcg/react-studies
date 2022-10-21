import { render, screen } from '@testing-library/react'
import { Greet } from './greet'

//?   Using test.only('mytest', ()=>{.....}), it will only test this one
//?   Using test.skip('mytest', ()=>{.....}), it will skip this one
//?   Describe used for grouping, can use the methods .only or .skip as well
//?   We can use Describe nested, creating sub-groups
//?   Test suites is each file, not the describe.
//?   test can be replaced for it.  ( fit => replace test.only   xit => test.skip)

describe('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
  })

  test('Greed renders with a name', () => {
    render(<Greet name="bruno" />)
    const textElement = screen.getByText(/hello bruno/i)
    expect(textElement).toBeInTheDocument()
  })
})
