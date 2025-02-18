import type { Route } from "../../../+types/monthly-leaderboard";
import type { MetaFunction } from "@react-router/types";

export function meta(): MetaFunction {
  return [{ title: "월간 리더보드 | Product Hunt" }];
}

export function loader({ request, params }: Route.LoaderArgs) {
  return {
    year: params.year,
    month: params.month,
    products: []
  };
}

export default function MonthlyLeaderboardPage({ loaderData }: Route.ComponentProps) {
  const { year, month, products } = loaderData;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{year}년 {month}월 최고의 제품</h1>
      {/* 월간 리더보드 내용 구현 예정 */}
    </main>
  );
} 