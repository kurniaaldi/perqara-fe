<template>
  <div class="min-h-screen h-full bg-background w-full">
    <Header></Header>
    <MovieCarousel />

    <MovieList :movies="movies" />
  </div>
</template>

<script setup>
import Header from "~/components/Header.vue";
import MovieCarousel from "~/components/MovieCarousel.vue";
import MovieList from "~/components/MovieList.vue";

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
