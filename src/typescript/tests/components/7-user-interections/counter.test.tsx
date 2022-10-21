import { render, screen } from '@testing-library/react'
import { Counter } from './counter'
import user from '@testing-library/user-event'

//! We have some mouse interactions to test: click, dblClick, tripleClick, hover, unhover

//! pointer({keys: '[MouseLeft]'}) => click on left
//! pointer({keys: '[MouseLeft][MouseRight]'}) => click on left then on right
//! pointer('[MouseLeft]') => click on left, if there is no more arguments, does not need a object
//! pointer({keys: '[MouseLeft>]'}) => click left without releasing it
//! pointer({keys: '[MouseLeft/]'}) => left button release

//? It is always better to use the convinience API, since is easier to read and write.

describe('Counter', () => {
  test('renders correctly', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading')
    expect(countElement).toBeInTheDocument()
    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    expect(incrementButton).toBeInTheDocument()
    const amountInput = screen.getByRole('spinbutton')
    expect(amountInput).toBeInTheDocument()
    const setButton = screen.getByRole('button', { name: 'Set' })
    expect(setButton).toBeInTheDocument()
  })

  test('renders a count of 0', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('0')
  })

  test('renders a count of 1 after clicking the increment button', async () => {
    user.setup()
    render(<Counter />)
    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    await user.click(incrementButton)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('1')
  })

  // all user interactions are ASYNC!

  test('renders a count of 2 after clicking the increment button twice', async () => {
    user.setup()
    render(<Counter />)
    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    await user.click(incrementButton)
    await user.click(incrementButton)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('2')
  })

  //!  USING KEYBOARD ----------------------------------------------------------------------
  //* Clipboard APIs => copy(), cut(), paste()
  //* Keyboard API => keyboard('foo') translates to: f o o being pressed, keyboard('{Shift>}A{/Shift}'), translates to Shift(down) A Shift(up)
  //* Utility API => type(), clear(), selectOptions() [select or dropdown], deselectOptions(),  upload() [file upload]
  //* Convenience Api => tab()
  //* KeyBoard API

  test('renders a count of 10 after clicking the set button', async () => {
    user.setup()
    render(<Counter />)
    const amountInput = screen.getByRole('spinbutton')
    await user.type(amountInput, '10')
    expect(amountInput).toHaveValue(10)
    const setButton = screen.getByRole('button', { name: 'Set' })
    await user.click(setButton)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('10')
  })

  test('elements are focused in the right order', async () => {
    user.setup()
    render(<Counter />)
    const amountInput = screen.getByRole('spinbutton')
    const setButton = screen.getByRole('button', { name: 'Set' })
    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    await user.tab()
    expect(incrementButton).toHaveFocus()
    await user.tab()
    expect(amountInput).toHaveFocus()
    await user.tab()
    expect(setButton).toHaveFocus()
  })
})
