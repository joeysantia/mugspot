import ItemPage from "./ItemPage";
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from "@testing-library/react";

describe('ItemPage component', () => {

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
    let cart = [
        
            {
                name: "Campfire Mug",
                id: 'black-ring',
                index: 3,
                description: "A perfect companion for a campout, road trip, or hike.",
                img: '#',
                price: 14.95,
              }, 
        
    ]
    let params = {
        itemId: 'black-ring'
    }

    it('renders the title, description, price, image, and quantity of an item', () => {
        

        render(<ItemPage itemArray={itemArray} cart={cart} params={params} />, { wrapper: MemoryRouter})
        expect(screen).toMatchSnapshot()
    })

    it.skip('redirects to Shop when addedToCart is true', () => {})

    it.skip('correctly displays quantity from props', () => {})

    it.skip('correctly displays quantity when changed', () => {})

    it.skip('correctly updates the cart when button is clicked', () => {})
})