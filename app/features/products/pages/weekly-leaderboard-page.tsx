import type { Route } from "../../../+types/weekly-leaderboard";
import type { MetaFunction } from "@react-router/types";

export function meta(): MetaFunction {
  return [{ title: "주간 리더보드 | Product Hunt" }];
}

export function loader({ request, params }: Route.LoaderArgs) {
  return {
    year: params.year,
    week: params.week,
    products: []
  };
}

export default function WeeklyLeaderboardPage({ loaderData }: Route.ComponentProps) {
  const { year, week, products } = loaderData;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{year}년 {week}주차 최고의 제품</h1>
      {/* 주간 리더보드 내용 구현 예정 */}
    </main>
  );
} 