<template>
  <div
    v-for="(movie, index) in movies"
    :key="index"
    class="relative group w-56"
  >
    <img
      :src="imgUrl + movie.poster_path"
      :alt="movie.title"
      class="w-full h-80 object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
    />
    <div
      class="absolute top-0 right-0 bg-gray-900 bg-opacity-80 text-white text-lg font-semibold px-2.5 py-1.5"
    >
      {{ movie.vote_average.toFixed(1) }}
    </div>
    <h3 class="text-white font-semibold mt-2 text-sm">
      {{ movie.title }}
    </h3>
    <p class="text-gray-400 text-xs">{{ movie.release_date }}</p>

    <div
      class="absolute inset-0 bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-opacity duration-300"
    >
      <div class="flex items-center space-x-1 text-white text-lg font-semibold">
        <span class="text-yellow-400 text-2xl">⭐</span>
        <span>{{ movie.vote_average.toFixed(1) }}</span>
      </div>

      <p class="text-white text-lg mt-2">{{ movie.original_title }}</p>

      <button
        @click="router.push(`/movie/${movie.id}`)"
        class="mt-4 px-6 py-2 bg-red-600 text-white font-bold rounded-full shadow-md hover:bg-red-700 transition duration-300"
      >
        VIEW
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const router = useRouter();

const config = useRuntimeConfig();

const imgUrl = config.public.imgUrl;

defineProps({
  movies: Array,
});
</script>

<style scoped>
.group:hover img {
  filter: brightness(1.2);
}
</style>
