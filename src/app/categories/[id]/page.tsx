import Category from "@/types/Category";
import Image from "next/image";

const CategoryPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`);
  const category: Category = await res.json();

  return (
    <div>
      <h2>{category.name}</h2>
      <Image
        src={category.image}
        alt={category.name}
        width={300}
        height={400}
        unoptimized
      />
    </div>
  );
};

export default CategoryPage;