import { DateTime } from "luxon";
import type { Route } from "./+types/daily-leaderboard-page";
import { data, isRouteErrorResponse, Link } from "react-router";
import { z } from "zod";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/product-card";
import { Button } from "~/common/components/ui/button";
import ProductPagination from "~/common/components/product-pagination";
const paramsSchema = z.object({
  year: z.coerce.number().int().min(1900).max(2100),
  month: z.coerce.number().int().min(1).max(12),
  day: z.coerce.number().int().min(1).max(31),
});

export const loader = ({ params }: Route.LoaderArgs) => {
  const { success, data: parsedData } = paramsSchema.safeParse(params);

  if (!success) {
    throw data(
      {
        error_code: "Invalid params",
        message: "The params are invalid",
      },
      {
        status: 400,
      }
    );
  }

  const date = DateTime.fromObject(parsedData).setZone("Asia/Seoul");

  if (!date.isValid) {
    throw data(
      {
        error_code: "Invalid date",
        message: "The date is invalid",
      },
      {
        status: 400,
      }
    );
  }

  const today = DateTime.now().setZone("Asia/Seoul").startOf("day");

  if (date > today) {
    throw data(
      {
        error_code: "Future date",
        message: "The date is in the future",
      },
      {
        status: 400,
      }
    );
  }

  return {
    ...parsedData,
  };
};

export default function DailyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  const urlDate = DateTime.fromObject({
    year: loaderData.year,
    month: loaderData.month,
    day: loaderData.day,
  });

  const prevDay = urlDate.minus({ days: 1 });
  const nextDay = urlDate.plus({ days: 1 });
  const isToday = urlDate.equals(DateTime.now().startOf("day"));

  return (
    <div className="space-y-10">
      <Hero
        title={`The best products of ${urlDate.toLocaleString(
          DateTime.DATE_MED
        )}`}
        description={""}
      />
      <div className="flex items-center justify-center gap-2">
        <Button variant="secondary" asChild>
          <Link
            to={`/products/leaderboards/daily/${prevDay.year}/${prevDay.month}/${prevDay.day}`}
          >
            &larr; {prevDay.toLocaleString(DateTime.DATE_SHORT)}
          </Link>
        </Button>
        {!isToday ? (
          <Button variant="secondary" asChild>
            <Link
              to={`/products/leaderboards/daily/${nextDay.year}/${nextDay.month}/${nextDay.day}`}
            >
              {nextDay.toLocaleString(DateTime.DATE_SHORT)} &rarr;
            </Link>
          </Button>
        ) : null}
      </div>
      <div className="space-y-5 w-full max-w-screen-md mx-auto">
        {Array.from({ length: 11 }).map((_, index) => (
          <ProductCard
            id="productId"
            name="Product Name"
            description="Product Description"
            commentCount={12}
            viewCount={12}
            upvoteCount={120}
          />
        ))}
      </div>
      <ProductPagination totalPages={10} />
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        {error.data.message} / {error.data.error_code}
      </div>
    );
  }

  if (error instanceof Error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h1>Unknown Error</h1>
    </div>
  );
}
