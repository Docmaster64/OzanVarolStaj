/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverBuildPath: "build/index.js",
  serverConditions: ["cloudflare"],
  serverDependenciesToBundle: [
    /^@remix-run\/(cloudflare|node|react)$/,
    "react",
    "react-dom",
    "isbot",
  ],
  serverMainFields: ["main", "module"],
  serverModuleFormat: "cjs",
  serverPlatform: "neutral",
};