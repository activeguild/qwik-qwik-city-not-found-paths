import type { Context } from "@netlify/edge-functions";
import { createQwikCity } from "@builder.io/qwik-city/middleware/netlify-edge";
import render from "./entry.ssr";

const qwikCityHandler = (request: Request, context: Context) => {
  return createQwikCity({
    render,
    qwikCityPlan: { routes: [] },
  })(request, context);
};

export default qwikCityHandler;
