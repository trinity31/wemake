import type { Route } from "../../../+types/leaderboard";
import type { MetaFunction } from "@react-router/types";

export function meta(): MetaFunction {
  return [{ title: "리더보드 | Product Hunt" }];
}

export function loader({ request }: Route.LoaderArgs) {
  return {
    topProducts: []
  };
}

export default function LeaderboardPage({ loaderData }: Route.ComponentProps) {
  const { topProducts } = loaderData;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">리더보드</h1>
      {/* 리더보드 내용 구현 예정 */}
    </main>
  );
} 