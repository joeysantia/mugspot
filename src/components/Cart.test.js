import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cart from "./Cart";

describe("Cart component", () => {
  let cart = [
    {
      name: "BlackRing Brand Mug",
      id: "black-ring",
      index: 0,
      description: "(Limited edition) Mug from BlackRing Coffee Roasters.",
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
  ];
  describe("unit tests", () => {
    it("renders a button and ItemSummary components", () => {
      render(<Cart cart={cart} />);
      expect(screen).toMatchSnapshot();
    });

    it('renders the "Cart is Empty" message when cart is empty', () => {
      render(<Cart cart={[]} />);
      expect(
        screen.getByText("You have no items in your cart.")
      ).toBeInTheDocument();
    });

    it('renders the "Thanks for visiting!" alert message when Buy Now is clicked', () => {
      const mockAlert = jest.spyOn(window, "alert").mockImplementation();
      render(<Cart cart={cart} />);
      userEvent.click(screen.getByRole("button", { name: "Buy Now" }));
      expect(mockAlert).toHaveBeenCalledTimes(1);
    });
  });

  describe("integration tests", () => {
    it("correctly displays total from props", () => {
      render(<Cart cart={cart} />);
      expect(screen.getByText("Total: 118.70")).toBeInTheDocument();
    });

    it("correctly displays total when quantity is increased", () => {
      const mockSetCart = jest.fn();
      mockSetCart.mockImplementation(() => {
        cart = cart.map((item) => {
          if (item.id === "black-ring") {
            item.quantity = 2;
          }
          return item;
        });
      });
      render(<Cart cart={cart} setCart={mockSetCart} />);
      userEvent.click(screen.getAllByRole("button", { name: "+" })[0]);
      expect(cart[0].quantity).toEqual(2);
      render(<Cart cart={cart} />);
      expect(screen.getByText("Total: 143.65")).toBeInTheDocument();
    });

    it("correctly displays total when quantity is decreased", () => {
      const mockSetCart = jest.fn();
      mockSetCart.mockImplementation(() => {
        cart = cart.map((item) => {
          if (item.id === "boss") {
            item.quantity = 2;
          }
          return item;
        });
      });
      render(<Cart cart={cart} setCart={mockSetCart} />);
      userEvent.click(screen.getAllByRole("button", { name: "-" })[0]);
      expect(cart[0].quantity).toEqual(2);
      render(<Cart cart={cart} />);
      expect(screen.getByText("Total: 125.70")).toBeInTheDocument();
    });
  });
});
