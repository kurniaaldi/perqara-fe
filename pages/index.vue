<template>
  <NuxtLayout>
    <MovieCarousel :movies="resAiring?.results" />
    <div class="container mx-auto my-6 relative py-4">
      <div
        class="bg-white bg-opacity-5 h-80 absolute w-full top-0"
        :style="{
          backgroundImage: `linear-gradient(#0000008c, #fff))`,
        }"
      ></div>
      <div
        class="flex flex-col sm:flex-row items-center justify-between my-6 xl:px-32 px-4 z-20 relative"
      >
        <h2 class="text-xl sm:text-2xl font-bold text-white">
          Discover Movies
        </h2>

        <div class="flex justify-end space-x-2 mt-3 sm:mt-0 px-4">
          <button
            @click="changeSort('popularity.desc')"
            :class="
              selectedSort === 'popularity.desc' ? 'bg-red-500' : 'bg-gray-700'
            "
            class="text-white px-3 py-1 rounded-full text-xs sm:text-sm"
          >
            Popularity
          </button>
          <button
            @click="changeSort('primary_release_date.desc')"
            :class="
              selectedSort === 'primary_release_date.desc'
                ? 'bg-red-500'
                : 'bg-gray-700'
            "
            class="text-white px-3 py-1 rounded-full text-xs sm:text-sm"
          >
            Release Date
          </button>
        </div>
      </div>

      <MovieList :movies="movies" />
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, watch } from "vue";
import { useFetchAuth } from "~/composable/useFetchAuth";
import MovieCarousel from "~/components/MovieCarousel.vue";
import MovieList from "~/components/MovieList.vue";

const selectedSort = ref("popularity.desc");
const movies = ref([]);
const resAiring = await useFetchAuth(
  "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
);

const fetchMovies = async () => {
  const response = await useFetchAuth(
    `https://api.themoviedb.org/3/discover/movie?language=en&sort_by=${selectedSort.value}`,
  );
  movies.value = response?.results || [];
};

const changeSort = (sort) => {
  selectedSort.value = sort;
};

watch(selectedSort, () => {
  fetchMovies();
});

fetchMovies();
</script>
