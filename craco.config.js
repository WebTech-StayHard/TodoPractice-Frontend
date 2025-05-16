const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@images": path.resolve(__dirname, "./src/assets/images"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@ui": path.resolve(__dirname, "./src/components/ui"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@ui-pages": path.resolve(__dirname, "./src/components/ui/pages"),
      "@slices": path.resolve(__dirname, "./src/services/slices"),
      "@selectors": path.resolve(__dirname, "./src/services/selectors"),
      "@thunks": path.resolve(__dirname, "./src/services/thunks"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@store": path.resolve(__dirname, "./src/services/store/store.ts"),
      "@api": path.resolve(__dirname, "./src/api/fake-api.ts"),
    },
  },
};
