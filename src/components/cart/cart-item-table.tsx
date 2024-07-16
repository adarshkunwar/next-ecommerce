import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { generate_data } from "@/data/product_builder";
import Image from "next/image";

type Props = {};

const CartItemTable = (props: Props) => {
  const products = generate_data(5);
  return (
    <div>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead className="w-full">Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead className="text-right">Sub total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product, index) => {
            return (
              <TableRow key={index}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium">
                  <div className="flex">
                    <div className="flex aspect-video items-center justify-center p-2 w-full h-full">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-full w-full rounded-lg object-cover"
                        src={product.image[0]}
                        alt="heroImage"
                      />
                    </div>
                    <div>{product.name}</div>
                  </div>
                </TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell className="text-right">
                  {product.price * product.quantity}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default CartItemTable;
