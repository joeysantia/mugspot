import QuantityManager from './QuantityManager'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'

describe("QuantityManager", () => {

    it('correctly renders when passed in with no props', () => {
      render(<QuantityManager />)

      expect(screen).toMatchSnapshot()
    })

    it('correctly displays quantity from props', () => {
      render(<QuantityManager quantity={2} />)

      expect(screen.getByRole("textbox").value).toMatch(/2/)
    })

    it('correctly displays quantity when changed', () => {
        render(<QuantityManager quantity={2}/>, { wrapper: MemoryRouter})
  
        userEvent.click(screen.getByRole("button", { name: "+" }))
  
        expect(screen.getByRole("textbox").value).toMatch(/3/)
  
        userEvent.click(screen.getByRole("button", { name: "-" }))
        userEvent.click(screen.getByRole("button", { name: "-" }))
  
        expect(screen.getByRole("textbox").value).toMatch(/1/)
      })
})
