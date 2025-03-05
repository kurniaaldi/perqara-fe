// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseUrl:
        process.env.NUXT_PUBLIC_BASE_URL ?? "https://api.themoviedb.org/3",
      imgUrl:
        process.env.NUXT_PUBLIC_IMG_URL ??
        "https://image.tmdb.org/t/p/original",
      secretKey:
        process.env.NUXT_PUBLIC_API_KEY ?? "92cac0c7639e4c1a882777bc8bd6a7d6",
      token: process.env.NUXT_PUBLIC_PRIVATE_TOKEN ?? "",
    },
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
});