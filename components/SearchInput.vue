<template>
  <div class="relative w-full max-w-md bg-[#1E232B]">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Find movie"
      class="w-full bg-gray-800 text-white placeholder-gray-400 pl-10 pr-10 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
    />
    <div
      class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
    >
      <Icon name="fa6-solid:clapperboard" />
    </div>
    <button
      class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
      @click="search"
    >
      <img
        src="@/assets/icons/search_icon.svg"
        alt="Search"
        class="absolute w-5 h-5 opacity-60"
      />
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const searchQuery = ref("");

const search = () => {
  console.log("Searching for:", searchQuery.value);
};
</script>

<style scoped></style>
