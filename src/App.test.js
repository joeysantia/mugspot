import React, { shallow } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import {
  toBeInTheDocument,
  __esModule,
} from "@testing-library/jest-dom/dist/matchers";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";

describe("App", () => {
  /**
   * what do i want the app to do?
   *
   * 1. Routing
   * - Group these together
   * 2. Update state and props correctly
   * - quantity
   * - updating quantity after going to an ItemPage
   * - updating Cart after going to an ItemPage
   * -
   */

  //Integration tests

  jest.mock('./components/Navbar.js')
  jest.mock('./components/Home.js')
  jest.mock('./components/Cart.js')
  jest.mock('./components/ItemCard.js')
  jest.mock('./components/ItemPage.js')
  jest.mock('./components/ItemSummary.js')
  jest.mock('./components/QuantityManager.js')
  jest.mock('./components/Shop.js')

  describe("routing", () => {
    it("sends the user to the Shop component when button is clicked", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "Shop Now" }));
      expect(screen.getByText("Products")).toBeInTheDocument();
    });

    it("sends the user to the Home component when the main logo is clicked", () => {
      render(<App />);
      userEvent.click(screen.getByRole("img", { name: "logo" }));
      expect(screen.getByText("Mugs made simple.")).toBeInTheDocument();
    });

    it("sends the user to the Cart component when the cart icon is clicked", () => {
      render(<App />);
      userEvent.click(screen.getByRole("img", { name: "cart" }));
      expect(screen.getByText("Your Cart")).toBeInTheDocument();
    });

    it("sends the user to an ItemPage when an ItemCard is clicked", () => {
      render(<App />)
      userEvent.click(screen.getByRole("link", { name: "Shop"}))
      userEvent.click(screen.getByRole("img", { name: "BlackRing Brand Mug"}))
      expect(screen.getByText("BlackRing Brand Mug")).toBeInTheDocument()
    })
  });

  describe("state and props", () => {
    it("quantity correctly handles an empty array", () => {
      render(<App />);
  
      expect(screen.getByText("0")).toBeInTheDocument();
    });

    it("quantity correctly handles a populated cart", () => {
      render(<App />)
      userEvent.click(screen.getByRole("link", { name: "Shop"}))
      userEvent.click(screen.getByRole("img", { name: "BlackRing Brand Mug"}))
      userEvent.click(screen.getByRole("button", { name: '+' }))
      userEvent.click(screen.getByRole("button", { name: "Add to Cart" }))
      expect(screen.getByText("1")).toBeInTheDocument()
    })

    it("correctly sets the state of Cart", () => {
      render(<App />)
      userEvent.click(screen.getByRole("link", { name: "Shop"}))
      userEvent.click(screen.getByRole("img", { name: "BlackRing Brand Mug"}))
      userEvent.click(screen.getByRole("button", { name: '+' }))
      userEvent.click(screen.getByRole("button", { name: "Add to Cart" }))
      userEvent.click(screen.getByRole("img", { name: 'cart' }))
      expect(screen.getByText("BlackRing Brand Mug")).toBeInTheDocument()

    })

    
  })

  
});
