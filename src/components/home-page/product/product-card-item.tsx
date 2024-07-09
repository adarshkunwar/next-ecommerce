import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Product } from "@/types/Product";

type Props = {
  product: Product;
};
export default function SingleCardItem({ product }: Props) {
  return (
    <Card>
      <CardHeader>
        <div className="aspect-square overflow-clip w-full">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-full rounded-lg object-cover"
            src={product.image[0]}
            alt={product.name}
          />
        </div>
      </CardHeader>
      <CardContent>
        <h3>{product.name}</h3>
        <del>{product.price}</del>
        <h3>{product.price - product.discount}</h3>
      </CardContent>
    </Card>
  );
}
