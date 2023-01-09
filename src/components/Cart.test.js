import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Cart from "./Cart"

describe('Cart component', () => {

    let cart = [
        {
            name: "BlackRing Brand Mug",
            id: 'black-ring',
            index: 0,
            description: "(Limited edition) Mug from BlackRing Coffee Roasters.",
            img: '#',
            price: 24.95,
            quantity: 1,
          },
          {
            name: "Black Clay Mug",
            id: 'black',
            index: 1,
            description: "Simple and elegant black clay mug.",
            img: '#',
            price: 19.95,
            quantity: 2
          }, 
          {
            name: "Boss Mug",
            id: 'boss',
            index: 2,
            description: "White mug with gold 'Boss' lettering.",
            img: '#',
            price: 17.95,
            quantity: 3
          },
    ]

    it('renders a button and ItemSummary components', () => {
        render(<Cart cart={cart}/>)
        expect(screen).toMatchSnapshot()
    })

    it('renders the correct total from a cart', () => {
        render(<Cart cart={cart} />)
        expect(screen.getByText("Total: 118.70")).toBeInTheDocument()
    })

    it('renders the "Cart is Empty" message when cart is empty', () => {
        render(<Cart cart={[]} />)
        expect(screen.getByText("You have no items in your cart")).toBeInTheDocument()
    })

    it('renders the "Thanks for visiting!" alert message when Buy Now is clicked', () => {
        const mockAlert = jest.spyOn(window, 'alert').mockImplementation()
        render(<Cart cart={cart} />)
        userEvent.click(screen.getByRole("button", { name: "Buy Now"}))
        expect(mockAlert).toHaveBeenCalledTimes(1)
    })

    //Integration tests
    it('correctly displays total from props', () => {
        render(<Cart cart={cart} />)
        expect(screen.getByText("Total: 118.70")).toBeInTheDocument()

    })

    it.skip('correctly displays total when quantity is increased', () => {
        render(<Cart />)
    })

    it.skip('correctly displays total when quantity is decreased', () => {

    })
})