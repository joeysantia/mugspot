import React, { shallow } from 'react'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { __esModule } from '@testing-library/jest-dom/dist/matchers';
import Navbar from './components/Navbar'
import Shop from './components/Shop'


describe('App', () => {

  //Integration tests

  it("quantity correctly handles an empty array", () => {
    render(<App />)

    expect(screen.getByText("0")).toBeInTheDocument()
  })

  it("sends the user to the Shop component when button is clicked", () => {
    render(<App />)
    userEvent.click(screen.getByRole("button", { name: "Shop Now"}))
    expect(screen.getByText("Products")).toBeInTheDocument()
})

  it("sends the user to the Cart component when the cart icon is clicked", () => {
    render(<App />)
    userEvent.click(screen.getByRole("link", { name: "0 cart "}))
    expect(screen.getByText("Your Cart")).toBeInTheDocument()
  })

})
