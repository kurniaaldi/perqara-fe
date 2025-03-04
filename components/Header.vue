<template>
  <nav
    class="bg-gray-900 text-white px-32 py-3 flex items-center justify-between"
  >
    <div class="flex items-center space-x-2">
      <NuxtLink to="/" class="hover:text-red-500 transition">
        <img src="@/assets/images/logo.png" alt="Logo" class="w-28 h-8" />
      </NuxtLink>
    </div>

    <div class="relative w-full max-w-md">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Find movie"
        class="w-full bg-gray-800 text-white placeholder-gray-400 pl-10 pr-10 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
      />
      <div
        class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      >
        <img
          src="@/assets/icons/finder_icon.svg"
          alt="Search"
          class="w-5 h-5"
        />
      </div>
      <button
        class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
        @click="search"
      >
        <img
          src="@/assets/icons/search_icon.svg"
          alt="Search"
          class="w-5 h-5"
        />
      </button>
    </div>

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

<script>
export default {
  name: "Header",
  //   props: {
  //     title: {
  //       type: String,
  //       required: true,
  //     },
  //   },
};
</script>
