<template>
  <nav
    class="bg-white bg-opacity-5 text-white px-32 mobile:px-2 py-3 flex items-center justify-between"
  >
    <div class="flex items-center space-x-2">
      <NuxtLink to="/" class="hover:text-red-500 transition">
        <img
          src="@/assets/images/logo.png"
          alt="Logo"
          class="w-28 h-8 mobile:hidden"
        />
      </NuxtLink>
    </div>

    <SearchInput />

    <div class="flex items-center space-x-6 mobile:hidden">
      <div class="relative max-w-md" @mouseenter="isDropdownOpen = true">
        <div
          class="hover:text-red-500 text-sm transition flex items-center gap-4"
        >
          <img
            src="@/assets/icons/view_grid.svg"
            alt="Movie Icon"
            class="w-5 h-5"
          />
          CATEGORIES
        </div>

        <ul
          @mouseenter="isDropdownOpen = true"
          @mouseleave="isDropdownOpen = false"
          v-if="isDropdownOpen"
          class="absolute w-full bg-gray-800 mt-2 rounded-lg text-white shadow-lg z-30"
        >
          <li
            v-for="(movie, index) in resGenre?.genres"
            :key="movie.id"
            :class="[
              'px-4 py-2 cursor-pointer hover:bg-blue-600',
              index === activeIndex ? 'bg-blue-600' : '',
            ]"
            @click="selectCategory(movie)"
            @mouseover="activeIndex = index"
          >
            <span class="font-bold">{{ movie.name }}</span>
          </li>
        </ul>
      </div>
      <NuxtLink
        to="/movies?type=movie"
        class="hover:text-red-500 text-sm transition"
      >
        MOVIES
      </NuxtLink>
      <NuxtLink
        to="/movies?type=tv"
        class="hover:text-red-500 text-sm transition"
      >
        TV SHOWS
      </NuxtLink>
      <div to="/login" class="hover:text-red-500 text-sm transition">LOGIN</div>
    </div>
  </nav>
</template>

<script setup>
import { useFetchAuth } from "~/composable/useFetchAuth";

const isDropdownOpen = ref(false);
const activeIndex = ref(-1);
const router = useRouter();

const resGenre = await useFetchAuth(
  "https://api.themoviedb.org/3/genre/movie/list?language=en",
);

const selectCategory = (genre) => {
  if (!genre) genre = suggestions.value[activeIndex.value];
  if (genre) router.push(`/movies?with_genres=${genre.id}`);
};
</script>
