import Home from './Home'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

describe("Home component", () => {

    it("renders a heading, paragraph, and button", () => {
        render(<Home />, { wrapper: MemoryRouter})
        expect(screen).toMatchSnapshot()
    })

    it("sends the user to the Shop component when button is clicked", () => {
        render(<Home />)
        userEvent.click(screen.getByRole("button"))
        expect(screen.getByText("Products")).toBeInTheDocument()
    })
})