import CartItemTable from "@/components/cart/cart-item-table";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

type Props = {};

const Cart = (props: Props) => {
  return (
    <div className="container mx-auto py-10 ">
      <header className="flex flex-col justify-end items-center">
        <h1 className="text-3xl font-semibold justify-center">Cart</h1>
        <h1 className="text-lg font-semibold justify-center text-muted-foreground">
          A list for all your cart items
        </h1>
      </header>
      <div className="grid grid-cols-3 mt-4 gap-10">
        <section className="col-span-2">
          <CartItemTable />
        </section>
        <section>
          <OrderSummary />
        </section>
      </div>
    </div>
  );
};

const OrderSummary = () => {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-semibold justify-center">Order Summary</h2>
      </CardHeader>

      <CardContent>
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>Rs. 250.00</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping</p>
          <p>Rs. 10.00</p>
        </div>
        <div className="flex justify-between">
          <p>Tax</p>
          <p>Rs.25.00</p>
        </div>
        <div className="flex justify-between">
          <p>Total</p>
          <p>$285.00</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Cart;
