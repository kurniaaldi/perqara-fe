<template>
  <NuxtLayout>
    <div class="container mx-auto py-10 relative space-y-10">
      <div
        class="bg-white bg-opacity-5 h-80 absolute z-10 w-full top-0"
        :style="{
          backgroundImage: `linear-gradient(#0000008c, #fff))`,
        }"
      ></div>
      <div class="inline-block pt-4 lg:px-32 mobile:px-4 sm:px-4 z-20">
        <p class="text-4xl text-white border-t-4 border-[#E74C3C] pt-4">
          Movies
        </p>
      </div>
      <div
        class="z-20 lg:px-32 mobile:px-4 sm:px-4 grid mobile:grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-7"
      >
        <div>
          <SidebarFilter :genres="resGenre?.genres" />
        </div>
        <div
          class="col-span-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <MoviesCard v-if="!isFetching" :movies="movies" />
          <div class="col-span-4 flex items-center justify-center w-full">
            <button
              @click="loadMore"
              v-if="hasMore"
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
const movies = ref([]);
const page = ref(1);
const hasMore = ref(true);
const isFetching = ref(false);

const resGenre = await useFetchAuth(
  "https://api.themoviedb.org/3/genre/movie/list?language=en",
);

const fetchMovies = async (append = false) => {
  isFetching.value = true;
  const response = await useFetchAuth(
    `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${
      route.query.with_genres || ""
    }&page=${page.value}`,
  );

  if (append) {
    movies.value = [...movies.value, ...response.results];
  } else {
    movies.value = response.results;
  }

  if (response.page >= response.total_pages) {
    hasMore.value = false;
  }
  isFetching.value = false;
};

const loadMore = async () => {
  page.value += 1;
  await fetchMovies(true);
};

watchEffect(() => {
  page.value = 1;
  hasMore.value = true;
  fetchMovies();
});
</script>
