import type { MetaFunction } from "react-router";
import { ProductCard } from "~/features/products/components/product-card";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | wemake" },
    { name: "description", content: "Home to wemake" },
  ];
};

export default function HomePage() {
  return (
    <div className="px-20">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold loading-tight tracking-tight">
            Today's Products
          </h2>
          <p className="text-xl font-light text-foreground">
            The best products made by our community today.
          </p>
        </div>
        <div>
          {Array.from({ length: 10 }).map((_, index) => (
            <ProductCard
              id="productId"
              name="Product Name"
              description="Product Description"
              commentCount={12}
              viewCount={12}
              upvoteCount={120}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
