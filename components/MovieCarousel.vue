<template>
  <div class="container mx-auto w-full p-8 pb-0 relative">
    <swiper
      :slidesPerView="3"
      :spaceBetween="30"
      :loop="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :modules="[Autoplay, Pagination]"
      class="mySwiper"
    >
      <swiper-slide v-for="(movie, index) in movies.slice(0, 5)" :key="index">
        <div
          @click="router.push(`/movie/${movie.id}`)"
          class="overflow-hidden w-full h-[364px] flex cursor-pointer"
        >
          <img
            :src="imgUrl + movie.poster_path"
            :alt="movie.name"
            class="h-full w-40 object-cover"
          />

          <div class="p-4 bg-gray-900 my-5 w-full text-left overflow-hidden">
            <div class="flex items-center font-semibold text-sm">
              <span class="text-lg">⭐</span>
              <p class="ml-1 text-white text-lg">
                {{ movie.vote_average.toFixed(1) }}
              </p>
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
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination"; // Import CSS pagination
import { Autoplay, Pagination } from "swiper/modules";

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
  padding-bottom: 4rem;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: transparent;
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

:deep(.swiper-pagination-bullet) {
  background: gray;
  width: 10px;
  height: 10px;
  opacity: 0.5;
}

:deep(.swiper-pagination-bullet-active) {
  background: red;
  width: 28px;
  height: 10px;
  opacity: 1;
  border-radius: 12px;
}
</style>
