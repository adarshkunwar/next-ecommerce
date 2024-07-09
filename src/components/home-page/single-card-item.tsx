import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Category } from "@/types/categories";

type Props = {
  category: Category;
};
export default function SingleCardItem({ category }: Props) {
  return (
    <Card>
      <CardHeader>
        <Image
          width={0}
          height={0}
          sizes="100vw"
          className="h-full w-full rounded-lg object-cover"
          src={category.imageUrl}
          alt="heroImage"
        />
      </CardHeader>
      <CardContent>
        <h3>{category.name}</h3>
      </CardContent>
    </Card>
  );
}
