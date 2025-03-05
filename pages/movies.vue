<template>
  <NuxtLayout>
    <div class="container px-32 py-10 relative space-y-10">
      <div class="border-t-4 border-[#E74C3C] inline-block pt-4">
        <p class="text-4xl text-white">Movies</p>
      </div>
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-7"
      >
        <div>
          <SidebarFilter :genres="resGenre?.genres" />
        </div>
        <div
          class="col-span-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <MoviesCard :movies="resMovie?.results" />
          <div class="col-span-4 flex items-center justify-center w-full">
            <button
              class="mt-4 px-6 py-2 bg-red-600 text-white font-bold rounded-full shadow-md hover:bg-red-700 transition duration-300"
            >
              Load more
            </button>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { watchEffect, ref } from "vue";
import { useRoute } from "vue-router";
import { useFetchAuth } from "~/composable/useFetchAuth";

const route = useRoute();
const resMovie = ref(null);

const resGenre = await useFetchAuth(
  "https://api.themoviedb.org/3/genre/movie/list?language=en",
);

const fetchMovies = async () => {
  resMovie.value = await useFetchAuth(
    `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${
      route.query.with_genres || ""
    }`,
  );
};

watchEffect(fetchMovies);
</script>

<style scoped>
.group:hover img {
  filter: brightness(1.2);
}
</style>
