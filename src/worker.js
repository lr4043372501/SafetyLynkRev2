export default {
  async fetch(request, env, ctx) {
    // This worker acts as a simple entry point to serve static assets
    // using the Cloudflare Assets binding.
    return await env.ASSETS.fetch(request);
  },
};
