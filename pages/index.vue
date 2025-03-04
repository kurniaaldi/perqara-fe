<template>
  <NuxtLayout>
    <MovieCarousel />
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
</script>
