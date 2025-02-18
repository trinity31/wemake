import type { Route } from "../../../+types/daily-leaderboard";
import type { MetaFunction } from "@react-router/types";

export function meta(): MetaFunction {
  return [{ title: "일간 리더보드 | Product Hunt" }];
}

export function loader({ request, params }: Route.LoaderArgs) {
  return {
    year: params.year,
    month: params.month,
    day: params.day,
    products: []
  };
}

export default function DailyLeaderboardPage({ loaderData }: Route.ComponentProps) {
  const { year, month, day, products } = loaderData;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{year}년 {month}월 {day}일 최고의 제품</h1>
      {/* 일간 리더보드 내용 구현 예정 */}
    </main>
  );
} 