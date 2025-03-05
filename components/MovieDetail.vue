<template>
  <div class="flex items-start gap-4 px-32">
    <img
      :src="imgUrl + movies.poster_path"
      :alt="movies.title"
      class="w-56 h-full"
    />
    <div class="space-y-4">
      <p class="text-white text-lg">{{ movies?.release_date }}</p>
      <p class="text-white text-4xl">{{ movies.title }}</p>
      <p class="text-white text-sm">
        {{
          movies.genres?.map((item) => item.name).join(", ") ||
          "No Genre Available"
        }}
      </p>
      <div class="movie-stats flex items-center text-white p-4 w-full">
        <div class="flex items-center space-x-2 pr-6 border-r border-gray-500">
          <span class="text-yellow-400 text-xl">⭐</span>
          <span class="text-4xl font-bold">{{ movies.vote_average }}</span>
        </div>

        <div class="grid grid-cols-5 gap-6 pl-6 text-xs">
          <div class="text-xs text-gray-400 border-r border-gray-500 pr-6">
            <p class="font-semibold">USER SCORE</p>
            <p class="text-white font-medium">{{ movies.vote_count }} Vote</p>
          </div>
          <div class="text-xs text-gray-400 border-r border-gray-500 pr-6">
            <p class="font-semibold">STATUS</p>
            <p class="text-white font-medium">{{ movies.status }}</p>
          </div>
          <div class="text-xs text-gray-400 border-r border-gray-500 pr-6">
            <p class="font-semibold">LANGUAGE</p>
            <p class="text-white font-medium">{{ movies.original_language }}</p>
          </div>
          <div class="text-xs text-gray-400 border-r border-gray-500 pr-6">
            <p class="font-semibold">BUDGET</p>
            <p class="text-white font-medium">{{ movies.budget }}</p>
          </div>
          <div class="text-xs text-gray-400">
            <p class="font-semibold">PRODUCTION</p>
            <p class="text-white font-medium">{{ movies.vote_average }}</p>
          </div>
        </div>
      </div>
      <div class="flex items-start flex-col gap-2 text-sm">
        <p class="text-red-600">OVERVIEW</p>
        <p class="w-2/3">
          {{ movies.overview }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const config = useRuntimeConfig();

const imgUrl = config.public.imgUrl;

const props = defineProps({
  movies: Object,
});
</script>
