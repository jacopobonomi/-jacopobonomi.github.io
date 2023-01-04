import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

const config = {
  preprocess: preprocess(),

  kit: {
    prerender: {
      default: true,
    },
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: null,
    }),
  },
};

export default config;
