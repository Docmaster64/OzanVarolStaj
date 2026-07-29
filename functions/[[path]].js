import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
import * as build from "../build";

const handleRequest = createPagesFunctionHandler({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext: (context) => ({
    ...context.env,
    CF_PAGES: context.env.CF_PAGES,
    CF_PAGES_COMMIT_SHA: context.env.CF_PAGES_COMMIT_SHA,
    CF_PAGES_BRANCH: context.env.CF_PAGES_BRANCH,
  }),
});

export function onRequest(context) {
  return handleRequest(context);
}