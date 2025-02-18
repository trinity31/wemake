import type { MetaFunction as RouterMetaFunction } from "react-router";

export namespace Route {
  export interface LoaderArgs {
    request: Request;
  }

  export interface LoaderData {
    products: any[];
  }

  export interface ComponentProps {
    loaderData: LoaderData;
  }

  export type MetaFunction = RouterMetaFunction;
} 