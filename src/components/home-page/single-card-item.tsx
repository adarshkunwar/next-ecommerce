import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Category } from "@/types/categories";
import Link from "next/link";

type Props = {
  category: Category;
};
export default function SingleCardItem({ category }: Props) {
  return (
    <Link href={`shop?Category=${category.name}`}>
      <Card>
        <CardHeader>
          <div className="aspect-square">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full rounded-lg object-cover"
              src={category.imageUrl}
              alt="heroImage"
            />
          </div>
        </CardHeader>
        <CardContent>
          <h3>{category.name}</h3>
        </CardContent>
      </Card>
    </Link>
  );
}
