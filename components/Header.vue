<template>
  <nav
    class="bg-white bg-opacity-5 text-white px-32 py-3 flex items-center justify-between"
  >
    <div class="flex items-center space-x-2">
      <NuxtLink to="/" class="hover:text-red-500 transition">
        <img src="@/assets/images/logo.png" alt="Logo" class="w-28 h-8" />
      </NuxtLink>
    </div>

    <SearchInput />

    <nav class="flex items-center space-x-6">
      <NuxtLink to="/categories" class="hover:text-red-500 transition"
        >CATEGORIES</NuxtLink
      >
      <NuxtLink to="/movies" class="hover:text-red-500 transition"
        >MOVIES</NuxtLink
      >
      <NuxtLink to="/tv-shows" class="hover:text-red-500 transition"
        >TV SHOWS</NuxtLink
      >
      <NuxtLink to="/login" class="hover:text-red-500 transition"
        >LOGIN</NuxtLink
      >
    </nav>
  </nav>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useSearch } from "~/store/state";

const searchStore = useSearch();
const { query } = storeToRefs(searchStore);

const search = () => {
  console.log("Searching for:", query.value);
};
</script>
