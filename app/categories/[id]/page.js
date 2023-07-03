import Image from "next/image";
import React from "react";
import CategoryCard from "@/components/CategoryCard";
import productsByCat from "@/app/libs/productsByCat";
export default async function ProductPage({ params: { id } }) {
  const products = await productsByCat(id);
  console.log(products);
  return (
    <section>
      <h2 className="section-title">All Categories</h2>
      <div className="products">
        {products.splice(0, 22).map((product) => {
          return (
            <CategoryCard
              key={product.id}
              title={product.title}
              desc={product.description}
              id={product.id}
              price={product.price}
              src={product.images[0]}
              update={product.updatedAt}
              postD={product.creationAt}
            />
          );
        })}
      </div>
    </section>
  );
}
