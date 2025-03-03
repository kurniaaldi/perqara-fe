<template>
  <div class="w-full p-8 relative">
    <swiper
      :slidesPerView="3"
      :spaceBetween="30"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :modules="[Autoplay]"
      class="mySwiper"
    >
      <swiper-slide v-for="(movie, index) in movies" :key="index">
        <div class="overflow-hidden w-[541px] h-[364px] flex">
          <img
            src="../assets/images/movie_image.png"
            alt="movie.title"
            class="h-full w-60 object-cover"
          />

          <div class="p-4 bg-gray-900 my-5 w-full text-left">
            <div class="flex items-center font-semibold text-sm">
              <span class="text-lg">⭐</span>
              <p class="ml-1 text-white text-lg">7.3</p>
            </div>

            <h2 class="text-white font-bold text-[28px] mt-1">movie.title</h2>
            <p class="text-gray-400 text-base">movie.year • movie.genre</p>

            <p class="text-gray-300 text-xs mt-2 leading-relaxed">
              movie.description
            </p>
          </div>
        </div></swiper-slide
      >
    </swiper>
    <div
      class="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2"
    >
      <span
        v-for="(movie, index) in movies"
        :key="index"
        @click="currentIndex = index"
        class="w-3 h-3 rounded-full cursor-pointer"
        :class="currentIndex === index ? 'bg-red-500' : 'bg-gray-500'"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const movies = ref([
  {
    title: "News of the World",
    rating: "7.2",
    year: "2021",
    genre: "Drama",
    description:
      "A Texan traveling across the wild West bringing the news of the world to local townspeople...",
    image: "/images/movie1.jpg",
  },
  {
    title: "Space Sweepers",
    rating: "7.3",
    year: "2021",
    genre: "Sci-Fi",
    description:
      "When the crew of a space junk collector ship discovers a humanoid robot known to be a weapon...",
    image: "/images/movie2.jpg",
  },
  {
    title: "To All the Boys",
    rating: "8.1",
    year: "2021",
    genre: "Drama",
    description:
      "Senior year of high school takes center stage as Lara Jean returns from a trip to Korea...",
    image: "/images/movie3.jpg",
  },
  {
    title: "To All the Boys",
    rating: "8.1",
    year: "2021",
    genre: "Drama",
    description:
      "Senior year of high school takes center stage as Lara Jean returns from a trip to Korea...",
    image: "/images/movie3.jpg",
  },
]);
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: transparent;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
