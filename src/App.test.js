import React, { shallow } from 'react'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { __esModule } from '@testing-library/jest-dom/dist/matchers';
import Navbar from './components/Navbar'
import Shop from './components/Shop'


describe('App', () => {

  it.only('m', () => {
    expect(Math.ceil(Math.random() * 3)).toEqual(4)
  })
  
  /**
   * add other components as they are made
   */

  it("quantity correctly handles an empty array", () => {
    render(<App />)

    expect(screen.getByText("0")).toBeInTheDocument()
  })

  it.skip("quantity correctly handles cart array", () => {
    //in progress
    render(<App />)
    userEvent.click(screen.getByRole("button"))
    expect(screen.getByText("Hello")).toBeInTheDocument()
  })
})
