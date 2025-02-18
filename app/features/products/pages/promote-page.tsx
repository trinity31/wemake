import type { Route } from "../../../+types/promote";
import type { MetaFunction } from "@react-router/types";

export function meta(): MetaFunction {
  return [{ title: "제품 홍보 | Product Hunt" }];
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function PromotePage({ actionData }: Route.ComponentProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">제품 홍보하기</h1>
      <div className="max-w-2xl mx-auto space-y-6">
        {/* 홍보 옵션 구현 예정 */}
      </div>
    </main>
  );
} 