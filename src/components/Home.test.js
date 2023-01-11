import Home from './Home'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

describe("Home component", () => {
    it("renders a heading, paragraph, and button", () => {
        render(<Home />, { wrapper: MemoryRouter })
        expect(screen).toMatchSnapshot()
    })
})