/* eslint-disable @next/next/no-img-element */
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import Category from "@/types/Category";
import Link from "next/link";

import { FC } from "react";

interface Props {
  category: Category;
}

export const CategoryCard: FC<Props> = ({ category }) => {
  const { id, name, image } = category;
  return (
    <Card className="relative mx-auto w-[384px] pt-0">
      {/* <div className="absolute inset-0 z-30 aspect-video bg-black/35" /> этот действует как стекло фильтр */}

      <img
        src={image}
        alt={name}
        className="relative z-20 aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardAction></CardAction>
        <CardTitle>
          <Link href={`/categories/${id}`} className="cursor-pointer">
            {name}
          </Link>
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

// <Card className="relative mx-auto w-full max-w-sm pt-0">
//   <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
//   <Image
//     src={image}
//     alt={name}
//     fill
//     unoptimized
//     className="relative z-20 aspect-video object-cover brightness-60 grayscale dark:brightness-40"
//   />
//   <CardHeader>
//     <CardTitle>{name}</CardTitle>
//   </CardHeader>
//   <CardFooter>
//     <Button className="w-full" >View Event</Button>
//   </CardFooter>
// </Card>


// https://www.shutterstock.com/image-vector/label-banner-that-have-yellow-600nw-2674835533.jpg