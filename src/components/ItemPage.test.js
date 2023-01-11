import ItemPage from "./ItemPage";
import Router from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("ItemPage component", () => {
  jest.mock("./QuantityManager");
  jest.mock("./Shop")

  let itemArray = [
    {
      name: "BlackRing Brand Mug",
      id: "black-ring",
      index: 0,
      description: "Limited edition mug from BlackRing Coffee Roasters.",
      img: "#",
      price: 24.95,
    },
    {
      name: "Black Clay Mug",
      id: "black",
      index: 1,
      description: "Simple and elegant black clay mug.",
      img: "#",
      price: 19.95,
    },
    {
      name: "Boss Mug",
      id: "boss",
      index: 2,
      description: "White mug with gold 'Boss' lettering.",
      img: "#",
      price: 17.95,
    },
    {
      name: "Campfire Mug",
      id: "camp",
      index: 3,
      description: "A perfect companion for a campout, road trip, or hike.",
      img: "#",
      price: 14.95,
    },
  ];

  let cart = [
    {
      name: "Campfire Mug",
      id: "camp",
      index: 3,
      description: "A perfect companion for a campout, road trip, or hike.",
      img: "#",
      price: 14.95,
      quantity: 2,
    },
  ];


  /**
   * NOTE: for all tests, I render App and navigate to the ItemPage. This is to avoid
   *       the bugs that I am encountering when attempting to mock useParams. Will
   *       revisit later.
   */
  describe("unit tests", () => {
    it("renders the title, description, price, image, and quantity of an item", () => {
      render(<App />)
      userEvent.click(screen.getByRole("button", { name: "Shop Now"}))
      userEvent.click(screen.getByRole("img", { name: "Campfire Mug"}))
      expect(screen).toMatchSnapshot();
    });

    it("correctly displays quantity from props", () => {
      render(<App />);
      userEvent.click(screen.getByRole("heading", { name: "Campfire Mug" }));
      userEvent.click(screen.getByRole("button", { name: "+" }));
      userEvent.click(screen.getByRole("button", { name: "Add to Cart" }));
      userEvent.click(screen.getByRole("heading", { name: "Campfire Mug" }));

      expect(screen.getByRole("textbox").value).toEqual("1");
    });

  });

  describe("integration tests", () => {
    it("redirects to Shop when addedToCart is true", () => {
      render(<App />);
      userEvent.click(screen.getByRole("heading", { name: "Campfire Mug" }));
      userEvent.click(screen.getByRole("button", { name: "+" }));
      userEvent.click(screen.getByRole("button", { name: "Add to Cart" }));
      expect(screen.getByText("Products")).toBeInTheDocument();
    });

    it("correctly updates the cart when button is clicked", () => {
      render(<App />)
      userEvent.click(screen.getByRole("heading", { name: "Campfire Mug" }));
      userEvent.click(screen.getByRole("button", { name: "+" }));
      userEvent.click(screen.getByRole("button", { name: "Add to Cart" }));

      //this checks that the text of the cart icon link has updated ("1" is the content of the span element)
      expect(screen.getByRole("link", { name: "1 cart" })).toBeInTheDocument();
    });
  });
});
