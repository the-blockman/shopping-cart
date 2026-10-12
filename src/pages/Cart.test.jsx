import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { describe, it, expect, vi } from "vitest";
import Cart from "./Cart";
import { useCart } from "../hooks/useCart";

vi.mock("../hooks/useCart");

const items = [
  { id: 1, title: "Backpack", price: 10.5, image: "a.jpg", quantity: 2 },
  { id: 2, title: "Shirt", price: 5, image: "b.jpg", quantity: 1 },
];

function renderCart(cart) {
  const updateQuantity = vi.fn();
  useCart.mockReturnValue({ cart, updateQuantity });
  render(
    <MemoryRouter>
      <Cart />
    </MemoryRouter>,
  );
  return { updateQuantity };
}

describe("Cart", () => {
  it("shows the empty message when the cart is empty", () => {
    renderCart([]);
    expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
  });

  it("lists items and calculates the total", () => {
    renderCart(items);
    expect(screen.getByText("Backpack")).toBeInTheDocument();
    expect(screen.getByText("Shirt")).toBeInTheDocument();
    expect(screen.getByText("$26.00")).toBeInTheDocument();
  });

  it("calls updateQuantity when + is clicked", async () => {
    const { updateQuantity } = renderCart(items);
    const plusButtons = screen.getAllByRole("button", {
      name: "Increase quantity",
    });
    await userEvent.click(plusButtons[0]);
    expect(updateQuantity).toHaveBeenCalledWith(1, 3);
  });

  it("removes an item with quantity 1", async () => {
    const { updateQuantity } = renderCart(items);
    await userEvent.click(
      screen.getByRole("button", { name: "Remove from cart" }),
    );
    expect(updateQuantity).toHaveBeenCalledWith(2, 0);
  });
});
