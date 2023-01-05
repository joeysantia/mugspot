import Navbar from './Navbar'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'

describe("Navbar component", () => {

    it("renders with logo and links", () => {
        render(<Navbar quantity={2}/>, { wrapper: MemoryRouter})
        expect(screen).toMatchSnapshot()
    })

    it("renders the correct quantity", () => {
        render(<Navbar quantity={2} />, { wrapper: MemoryRouter })
        expect(screen.getByText("2")).toBeInTheDocument()
    })
})