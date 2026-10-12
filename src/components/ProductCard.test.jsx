import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import ProductCard from "./ProductCard";

const product = {
  id: 1,
  title: "Test Backpack",
  price: 10.5,
  image: "test.jpg",
  description: "A backpack",
  category: "bags",
};

function setup(cart = []) {
  const addToCart = vi.fn();
  const updateQuantity = vi.fn();
  render(
    <ProductCard
      product={product}
      cart={cart}
      addToCart={addToCart}
      updateQuantity={updateQuantity}
    />,
  );
  return { addToCart, updateQuantity };
}

describe("ProductCard", () => {
  it("renders the product details", () => {
    setup();
    expect(screen.getByText("Test Backpack")).toBeInTheDocument();
    expect(screen.getByText("$10.50")).toBeInTheDocument();
  });

  it("calls addToCart when Add to cart is clicked", async () => {
    const { addToCart } = setup();
    await userEvent.click(screen.getByRole("button", { name: /add to cart/i }));
    expect(addToCart).toHaveBeenCalledWith(product);
  });

  it("shows the quantity when the item is in the cart", () => {
    setup([{ ...product, quantity: 3 }]);
    expect(screen.getByText("3 in cart")).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /add to cart/i }),
    ).not.toBeInTheDocument();
  });

  it("increments and decrements the quantity", async () => {
    const { updateQuantity } = setup([{ ...product, quantity: 3 }]);
    await userEvent.click(
      screen.getByRole("button", { name: "Increase quantity" }),
    );
    expect(updateQuantity).toHaveBeenCalledWith(1, 4);
    await userEvent.click(
      screen.getByRole("button", { name: "Decrease quantity" }),
    );
    expect(updateQuantity).toHaveBeenCalledWith(1, 2);
  });

  it("removes the item when quantity is 1 and remove is clicked", async () => {
    const { updateQuantity } = setup([{ ...product, quantity: 1 }]);
    await userEvent.click(
      screen.getByRole("button", { name: "Remove from cart" }),
    );
    expect(updateQuantity).toHaveBeenCalledWith(1, 0);
  });
});
