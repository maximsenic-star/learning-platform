/* eslint-disable @next/next/no-img-element */
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import Product from "@/types/Product";
import Link from "next/link";

import { FC } from "react";

interface Props {
  product: Product;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const { id, title, images } = product;
  return (
    <Card className="relative mx-auto w-[384px] pt-0">
      {/* <div className="absolute inset-0 z-30 aspect-video bg-black/35" /> этот действует как стекло фильтр */}

      <img
        src={images[0]}
        alt={title}
        className="relative z-20 aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardAction></CardAction>
        <CardTitle>
          <Link href={`/products/${id}`} className="cursor-pointer">
            {title}
          </Link>
        </CardTitle>
      </CardHeader>
    </Card>
  );
};