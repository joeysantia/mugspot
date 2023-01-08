import { render } from "@testing-library/react";
import ItemCard from "./ItemCard";
import { screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom'

describe('ItemCard component', () => {

    it('renders an image, title header, and price', () => {
        let item = {
            name: "Boss Mug",
            id: 'boss',
            index: 2,
            description: "White mug with gold 'Boss' lettering.",
            img: '#',
            price: 17.95
          }

        render(<ItemCard item={item} />, { wrapper: MemoryRouter})
        expect(screen).toMatchSnapshot()
    })
})