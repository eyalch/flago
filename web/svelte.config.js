const sveltePreprocess = require("svelte-preprocess")

modules.exports = {
  preprocess: sveltePreprocess({
    defaults: {
      script: "ts",
      style: "scss",
    },
    scss: {
      prependData: "@import 'src/styles/variables.scss';",
    },
  }),
}
