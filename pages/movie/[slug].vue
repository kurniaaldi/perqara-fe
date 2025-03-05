<template>
  <NuxtLayout>
    <div
      class="relative w-full pt-64 bg-opacity-20 bg-cover"
      :style="{
        backgroundImage: `linear-gradient(#0000008c, #fff),url(${imgUrl}${resMovie.backdrop_path})`,
      }"
    >
      <div class="absolute top-[124px]">
        <MovieDetail :movies="resMovie" />
      </div>

      <div class="h-20 bg-black bg-opacity-50 w-full"></div>
      <div class="bg-white w-full h-full px-32 pb-14 pt-36 space-y-4 z-20">
        <p class="text-red-600">REVIEWS</p>
        <div class="grid grid-cols-2 gap-4 w-full">
          <CardReview :reviews="resReview.results" />
        </div>
      </div>
    </div>
    <div class="w-full h-full px-32 py-14 space-y-4 z-20">
      <p class="text-red-600">REVIEWS</p>
      <div
        class="grid mobile:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full"
      >
        <MoviesCard :movies="limitedRecommendation" />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { useFetchAuth } from "~/composable/useFetchAuth";

const route = useRoute();
const config = useRuntimeConfig();
const imgUrl = config.public.imgUrl;

const resMovie = await useFetchAuth(
  `https://api.themoviedb.org/3/movie/${route.params.slug}?language=en-US`,
);

const resRecommendationMovie = await useFetchAuth(
  `https://api.themoviedb.org/3/movie/${route.params.slug}/recommendations?language=en-US`,
);

const resReview = await useFetchAuth(
  `https://api.themoviedb.org/3/movie/${route.params.slug}/reviews?language=en-US`,
);

const limitedRecommendation = computed(
  () => resRecommendationMovie.results?.slice(0, 5) || [],
);
</script>
