import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Product } from "@/types/Product";
import { getDiscountedPrice } from "@/utils/getDiscrounted";

type Props = {
  product: Product;
};
export default function SingleCardItem({ product }: Props) {
  const discountPrice = getDiscountedPrice(product.price, product.discount);
  return (
    <Card className="rounded-lg overflow-hidden hover:shadow-lg transition-all">
      <CardHeader>
        <div className="aspect-video overflow-clip w-full">
          <Image
            width={100}
            height={100}
            sizes="100vw"
            className="h-full w-full rounded-lg object-cover"
            src={product.image[0]}
            alt={product.name}
          />
          <figcaption className="text-sm text-gray-400">
            {product.name}
          </figcaption>
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg line-clamp-2">{product.name}</h3>
        <h3 className="font-bold">
          {product.unit}
          {discountPrice}
        </h3>
        <div className="flex gap-1">
          <del className="text-sm text-muted-foreground">
            {product.unit}
            {product.price}
          </del>
          <div className="text-sm "> -{product.discount}%</div>
        </div>
      </CardContent>
    </Card>
  );
}
