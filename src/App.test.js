import React, { shallow } from 'react'
import { render, screen } from '@testing-library/react';
import App from './App';
import { __esModule } from '@testing-library/jest-dom/dist/matchers';
import Navbar from './components/Navbar'


describe('App', () => {
  jest.mock("./components/Navbar")
  jest.mock("./components/Home")
  
  /**
   * add other components as they are made
   */

  it("quantity correctly handles an empty array", () => {
    render(<App />)

    expect(screen.getByText("0")).toBeInTheDocument()
  })

  it.skip("quantity correctly handles cart array", () => {

    /**
     * revisit this
     */
  })
})
