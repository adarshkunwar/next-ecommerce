import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Product } from "@/types/Product";
import { getDiscountedPrice } from "@/utils/getDiscrounted";
import Link from "next/link";

type Props = {
  product: Product;
};

export default function SingleCardItem({ product }: Props) {
  const discountPrice = getDiscountedPrice(product.price, product.discount);
  return (
    <Link href={`/product/${product.id}`}>
      <Card className="rounded-lg overflow-hidden hover:shadow-lg transition-all">
        <CardHeader>
          <div className="rounded-sm aspect-video overflow-hidden w-full bg-red-300">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full rounded-lg object-cover aspect-square"
              src={product.image[0]}
              alt={product.name}
            />
            <figcaption className="text-sm text-gray-400">
              {product.name}
            </figcaption>
          </div>
        </CardHeader>
        <CardContent>
          <h3 className="text-md line-clamp-2">{product.name}</h3>
          <h3 className="font-bold">
            {product.unit}&nbsp;
            {discountPrice}
          </h3>
          <div className="flex gap-1">
            <del className="text-sm text-muted-foreground">
              {product.unit}&nbsp;
              {product.price}
            </del>
            <div className="text-sm "> -{product.discount}%</div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
