import type { Route } from "../../../+types/search";
import type { MetaFunction } from "@react-router/types";

export function meta(): MetaFunction {
  return [{ title: "제품 검색 | Product Hunt" }];
}

export function loader({ request }: Route.LoaderArgs) {
  return {
    searchResults: []
  };
}

export default function SearchPage({ loaderData }: Route.ComponentProps) {
  const { searchResults } = loaderData;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">제품 검색</h1>
      <div className="space-y-6">
        {/* 검색 결과 구현 예정 */}
      </div>
    </main>
  );
} 