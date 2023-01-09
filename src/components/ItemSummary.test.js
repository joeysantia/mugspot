import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ItemSummary from "./ItemSummary";

describe("ItemSummary component", () => {
  let cart = [
    {
      name: "BlackRing Brand Mug",
      id: "black-ring",
      index: 0,
      description: "Limited edition mug from BlackRing Coffee Roasters.",
      img: "#",
      price: 24.95,
      quantity: 1,
    },
    {
      name: "Black Clay Mug",
      id: "black",
      index: 1,
      description: "Simple and elegant black clay mug.",
      img: "#",
      price: 19.95,
      quantity: 2,
    },
    {
      name: "Boss Mug",
      id: "boss",
      index: 2,
      description: "White mug with gold 'Boss' lettering.",
      img: "#",
      price: 17.95,
      quantity: 3,
    },
    {
      name: "Campfire Mug",
      id: "camp",
      index: 3,
      description: "A perfect companion for a campout, road trip, or hike.",
      img: "#",
      price: 14.95,
      quantity: 4,
    },
  ];

  let item = {
    name: "Campfire Mug",
    id: "camp",
    index: 3,
    description: "A perfect companion for a campout, road trip, or hike.",
    img: "#",
    price: 14.95,
    quantity: 4,
  };

  it("renders with a delete button, image, title, QuantityManager, and subtotal", () => {
    render(<ItemSummary item={item} cart={cart} />);
    expect(screen).toMatchSnapshot();
  });

  it("deletes item from cart when delete button is clicked", () => {
    const setCart = jest.fn();
    
    setCart.mockImplementation(() => {
      cart = cart.filter(item => item.id !== 'camp')
    });
    render(<ItemSummary item={item} cart={cart} setCart={setCart} />);
    userEvent.click(screen.getByAltText("delete"))
    expect(cart.length).toEqual(3);
  });

  it("correctly displays subtotal from props", () => {
    render(<ItemSummary item={item} cart={cart} />);

    expect(screen.getByText("Subtotal: 59.80")).toBeInTheDocument()
  });

  //Integration tests 
  it.skip("correctly displays subtotal when changed", () => {});
});
