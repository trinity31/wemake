import type { Route } from "../../../+types/yearly-leaderboard";
import type { MetaFunction } from "@react-router/types";

export function meta(): MetaFunction {
  return [{ title: "연간 리더보드 | Product Hunt" }];
}

export function loader({ request, params }: Route.LoaderArgs) {
  return {
    year: params.year,
    products: []
  };
}

export default function YearlyLeaderboardPage({ loaderData }: Route.ComponentProps) {
  const { year, products } = loaderData;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{year}년 최고의 제품</h1>
      {/* 연간 리더보드 내용 구현 예정 */}
    </main>
  );
} 