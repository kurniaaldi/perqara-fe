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
        <div
          @click="router.push(`/movie/${movie.id}`)"
          class="overflow-hidden w-[541px] h-[364px] flex cursor-pointer"
        >
          <img
            :src="imgUrl + movie.poster_path"
            :alt="movies.name"
            class="h-full w-60 object-cover"
          />

          <div class="p-4 bg-gray-900 my-5 w-full text-left overflow-hidden">
            <div class="flex items-center font-semibold text-sm">
              <span class="text-lg">⭐</span>
              <p class="ml-1 text-white text-lg">{{ movie.vote_average }}</p>
            </div>

            <h2 class="text-white font-bold text-[28px] mt-1">
              {{ movie.name }}
            </h2>
            <p class="text-gray-400 text-base">{{ movie.first_air_date }}</p>

            <p class="text-gray-300 text-xs mt-2 leading-relaxed">
              {{ movie.overview }}
            </p>
          </div>
        </div>
      </swiper-slide>
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
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Autoplay } from "swiper/modules";
const config = useRuntimeConfig();
const router = useRouter();

const imgUrl = config.public.imgUrl;

const props = defineProps({
  movies: Array,
});
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
