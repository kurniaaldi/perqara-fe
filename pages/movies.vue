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
          <SidebarFilter />
        </div>
        <div
          class="col-span-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <MoviesCard :movies="movies" />
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
import { defineProps } from "vue";
import MoviesCard from "~/components/MoviesCard.vue";

defineProps({
  movies: Array,
});

const movies = [
  {
    title: "News of the World",
    rating: "7.2",
    year: "2021",
    genre: "Drama",
    description:
      "A Texan traveling across the wild West bringing the news of the world to local townspeople...",
    image: "/images/movie_image.png",
  },
  {
    title: "Space Sweepers",
    rating: "7.3",
    year: "2021",
    genre: "Sci-Fi",
    description:
      "When the crew of a space junk collector ship discovers a humanoid robot known to be a weapon...",
    image: "../assets/images/movie_image.png",
  },
  {
    title: "To All the Boys",
    rating: "8.1",
    year: "2021",
    genre: "Drama",
    description:
      "Senior year of high school takes center stage as Lara Jean returns from a trip to Korea...",
    image: "../assets/images/movie_image.png",
  },
  {
    title: "To All the Boys",
    rating: "8.1",
    year: "2021",
    genre: "Drama",
    description:
      "Senior year of high school takes center stage as Lara Jean returns from a trip to Korea...",
    image: "../assets/images/movie_image.png",
  },
  {
    title: "To All the Boys",
    rating: "8.1",
    year: "2021",
    genre: "Drama",
    description:
      "Senior year of high school takes center stage as Lara Jean returns from a trip to Korea...",
    image: "../assets/images/movie_image.png",
  },
];
</script>

<style scoped>
.group:hover img {
  filter: brightness(1.2);
}
</style>
