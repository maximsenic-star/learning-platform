// import Product from "@/types/Product";
// import Link from "next/link";

// export default async function Products() {
//   const res = await fetch("https://api.escuelajs.co/api/v1/products", {
//     next: { revalidate: 60 }, // если указали - будет ISR
//   });
//   const products: Product[] = await res.json();
//   console.log("Hello!");

//   return (
//     <div>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <Link href={`/products/${product.id}`}>{product.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import Product from "@/types/Product";
import { ProductCard } from "@/components/product-card";

export default async function Products() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const products: Product[] = await res.json();

  const productsList = (
    <ul className="flex flex-wrap gap-5 items-center justify-center ">
      {products.map((c) => (
        <li key={c.id}>
          <ProductCard product={c} />
        </li>
      ))}
    </ul>
  );

  return (
    <section className="bg-blue-200 min-h-screen py-6 px-4 md:px-20">
      <h2 className="text-center text-4xl text-white mb-8">Products</h2>
      {productsList}
    </section>
  );
}

// SERVER COMPONENTS
// SSG - Static Site Generation -  когда один раз генерируется при билде - и дальше не меняется
// SSR - Server Side Rendering - на каждый запрос
// ISR - Incremental Static Regeneration - когда например по таймеру или при определенных условиях
// {next: {revalidate: 60}}
