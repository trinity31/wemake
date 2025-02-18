import type { Route } from "../../../+types/categories";
import type { MetaFunction } from "@react-router/types";

export function meta(): MetaFunction {
  return [{ title: "카테고리 | Product Hunt" }];
}

export function loader({ request }: Route.LoaderArgs) {
  return {
    categories: []
  };
}

export default function CategoriesPage({ loaderData }: Route.ComponentProps) {
  const { categories } = loaderData;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">카테고리</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* 카테고리 목록 구현 예정 */}
      </div>
    </main>
  );
} 