import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import Shop from './Shop'



describe('Shop component', () => {

    it('renders with a header and a list of ItemCards', () => {
        let itemArray = [
            {
                name: "BlackRing Brand Mug",
                id: 'black-ring',
                index: 0,
                description: "Limited edition mug from BlackRing Coffee Roasters.",
                img: '#',
                price: 24.95
              },
              {
                name: "Black Clay Mug",
                id: 'black',
                index: 1,
                description: "Simple and elegant black clay mug.",
                img: '#',
                price: 19.95
              }, 
              {
                name: "Boss Mug",
                id: 'boss',
                index: 2,
                description: "White mug with gold 'Boss' lettering.",
                img: '#',
                price: 17.95
              },
              {
                name: "Campfire Mug",
                id: 'black-ring',
                index: 3,
                description: "A perfect companion for a campout, road trip, or hike.",
                img: '#',
                price: 14.95
              }, 
        ]
        
        render(<Shop itemArray={itemArray}/>, { wrapper: MemoryRouter })

        expect(screen).toMatchSnapshot()
    })

    it('displays "check back later" message if the itemArray is empty', () => {
        render(<Shop itemArray={[]}/>, { wrapper: MemoryRouter })
        let message = "No products available at this time. Check back later!"
        expect(screen.getByText(message)).toBeInTheDocument()
    })
})