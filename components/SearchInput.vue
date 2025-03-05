<template>
  <div class="relative w-full max-w-md">
    <div class="flex items-center bg-gray-800 p-2 rounded-lg">
      <img
        src="@/assets/icons/finder_icon.svg"
        alt="Movie Icon"
        class="w-5 h-5"
      />
      <input
        type="text"
        v-model="query"
        placeholder="Find movie"
        class="w-full bg-gray-800 text-white placeholder-gray-400 px-2 rounded-md focus:outline-none"
        @input="fetchMovies"
        @keydown.down.prevent="navigate(1)"
        @keydown.up.prevent="navigate(-1)"
        @keydown.enter="selectMovie"
      />
      <button class="p-2">
        <img
          src="@/assets/icons/search_icon.svg"
          alt="Search"
          class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
        />
      </button>
    </div>

    <ul
      v-if="suggestions.length"
      class="absolute w-full bg-gray-800 mt-2 rounded-lg text-white shadow-lg z-30"
    >
      <li
        v-for="(movie, index) in suggestions"
        :key="movie.id"
        :class="[
          'px-4 py-2 cursor-pointer',
          index === activeIndex ? 'bg-blue-600' : '',
        ]"
        @click="selectMovie(movie)"
        @mouseover="activeIndex = index"
      >
        <span class="font-bold">{{ movie.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useFetchAuth } from "~/composable/useFetchAuth";
import { useRouter } from "vue-router";

const query = ref("");
const suggestions = ref([]);
const activeIndex = ref(-1);
const router = useRouter();

const fetchMovies = async () => {
  if (query.value.length < 2) {
    suggestions.value = [];
    return;
  }

  const response = await useFetchAuth(
    `https://api.themoviedb.org/3/search/movie?query=${query.value}`,
  );
  suggestions.value = response.results || [];
};

const navigate = (step) => {
  activeIndex.value =
    (activeIndex.value + step + suggestions.value.length) %
    suggestions.value.length;
};

const selectMovie = (movie) => {
  if (!movie) movie = suggestions.value[activeIndex.value];
  if (movie) router.push(`/movie/${movie.id}`);
};

const highlightMatch = (text) => {
  const regex = new RegExp(`(${query.value})`, "gi");
  return text.replace(regex, `<span class="text-yellow-400">$1</span>`);
};
</script>

<style scoped>
input::placeholder {
  color: #aaa;
}
</style>
