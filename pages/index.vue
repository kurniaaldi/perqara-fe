<template>
  <NuxtLayout>
    <MovieCarousel :movies="resAiring?.results" />
    <MovieList :movies="response?.results" />
  </NuxtLayout>
</template>

<script setup>
import MovieCarousel from "~/components/MovieCarousel.vue";
import MovieList from "~/components/MovieList.vue";
import { useFetchAuth } from "~/composable/useFetchAuth";

const response = await useFetchAuth(
  "https://api.themoviedb.org/3/trending/all/day?language=en-US",
);

const resAiring = await useFetchAuth(
  "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
);
</script>
