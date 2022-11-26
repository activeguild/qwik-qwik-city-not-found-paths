import type { Context } from "@netlify/edge-functions";
import { createQwikCity } from "@builder.io/qwik-city/middleware/netlify-edge";
import qwikCityPlan from "@qwik-city-plan";
import render from "./entry.ssr";

const qwikCityHandler = (request: Request, context: Context) => {
  return createQwikCity({
    render,
    qwikCityPlan,
  })(request, context);
};

export default qwikCityHandler;
