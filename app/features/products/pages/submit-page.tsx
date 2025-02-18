import type { Route } from "../../../+types/submit";
import type { MetaFunction } from "@react-router/types";

export function meta(): MetaFunction {
  return [{ title: "제품 등록 | Product Hunt" }];
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function SubmitPage({ actionData }: Route.ComponentProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">새 제품 등록하기</h1>
      <form className="max-w-2xl mx-auto space-y-6">
        {/* 제품 등록 폼 구현 예정 */}
      </form>
    </main>
  );
} 