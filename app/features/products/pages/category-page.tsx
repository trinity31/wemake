import type { Route } from "../../../+types/category";
import type { MetaFunction } from "@react-router/types";

export function meta(): MetaFunction {
  return [{ title: "카테고리 제품 | Product Hunt" }];
}

export function loader({ request, params }: Route.LoaderArgs) {
  return {
    category: params.category,
    products: []
  };
}

export default function CategoryPage({ loaderData }: Route.ComponentProps) {
  const { category, products } = loaderData;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{category} 제품</h1>
      <div className="grid gap-6">
        {/* 카테고리별 제품 목록 구현 예정 */}
      </div>
    </main>
  );
} 