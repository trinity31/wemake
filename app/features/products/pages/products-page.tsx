import type { Route } from "../+types/products";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "제품 | Product Hunt" }];
};

export function loader({ request }: Route.LoaderArgs) {
  return {
    products: [],
  };
}

export default function ProductsPage({ loaderData }: Route.ComponentProps) {
  const { products } = loaderData;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">모든 제품</h1>
      <div className="grid gap-6">{/* 제품 목록 구현 예정 */}</div>
    </main>
  );
}
