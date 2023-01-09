import ItemPage from "./ItemPage";
import { MemoryRouter, useParams } from 'react-router-dom'
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from '../App'

describe('ItemPage component', () => {

    jest.mock('./Shop')
    jest.mock('./QuantityManager')
    jest.mock('../App')
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'), 
      useParams: () => ({
        itemId: 'camp',
        teamId: 'team-id1',
      }),
    }));

   

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
            id: 'camp',
            index: 3,
            description: "A perfect companion for a campout, road trip, or hike.",
            img: '#',
            price: 14.95
          }, 
        ]

    let cart = [
            {
                name: "Campfire Mug",
                id: 'camp',
                index: 3,
                description: "A perfect companion for a campout, road trip, or hike.",
                img: '#',
                price: 14.95,
                quantity: 2,
              },    
    ]

    //Integration tests

    //these first two shouldnt be integration tests if useParams can be mocked 
    it('renders the title, description, price, image, and quantity of an item', () => {
        

      render(<App />)
      userEvent.click(screen.getByRole("button", { name: "Shop Now"}))
      userEvent.click(screen.getByRole("heading", {name: "Campfire Mug"}))

      expect(screen).toMatchSnapshot()
  })

  it('redirects to Shop when addedToCart is true', () => {

    render(<App />)
    userEvent.click(screen.getByRole("heading", {name: "Campfire Mug"}))
    userEvent.click(screen.getByRole("button", { name: "+"}))
    userEvent.click(screen.getByRole("button", { name: "Add to Cart"}))
    expect(screen.getByText("Products")).toBeInTheDocument()
  })


    it.skip('correctly displays quantity from props', () => {
      render(<App />)
      userEvent.click(screen.getByRole("heading", {name: "Campfire Mug"}))
      userEvent.click(screen.getByRole("button", { name: "+"}))
      userEvent.click(screen.getByRole("button", { name: "Add to Cart"}))
      userEvent.click(screen.getByRole("heading", {name: "Campfire Mug"}))


     expect(screen.getByRole("textbox").value).toEqual("1")
    })

    it.skip('correctly updates the cart when button is clicked', () => {
      render(<ItemPage cart={cart} itemArray={itemArray}/>)

      userEvent.click(screen.getByRole("button", { name: "+" }))
      //userEvent.click(screen.getByRole("button", { name: "Add to Cart" }))

      expect(screen.getByRole("textbox").value).toEqual("1")
    })

    it.skip('integration test in which ItemSummary deletes an item', () => {})
})