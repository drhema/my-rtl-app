export default {
    async fetch(request, env) {
      try {
        const url = new URL(request.url);
        const response = await fetch(url.toString(), request);
        return response;
      } catch (e) {
        return new Response('Error loading page', { status: 500 });
      }
    },
  };