<template>
  <div
    v-for="(review, index) in reviews.slice(0, 2)"
    :key="index"
    class="review-card bg-[#F9F9F9] p-4 rounded-xl shadow-md flex space-x-4 h-60 overflow-hidden"
  >
    <div
      class="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden"
    >
      <img
        :src="imgUrl + review?.author_details?.avatar_path"
        :alt="review.author"
      />
    </div>

    <div class="flex-1">
      <div class="flex justify-between items-start">
        <div>
          <p class="font-bold text-gray-800">{{ review?.author }}</p>
          <p class="text-gray-500 text-sm">{{ review?.created_at }}</p>
        </div>
        <div
          class="bg-[#C4C4C447] px-2 py-1 rounded-lg flex items-start space-x-1"
        >
          <span class="text-yellow-500 text-xs">⭐</span>
          <span class="text-4xl font-bold text-gray-800">{{
            review?.author_details?.rating
          }}</span>
        </div>
      </div>

      <p class="text-gray-600 italic mt-2">{{ review?.content }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const config = useRuntimeConfig();
const imgUrl = config.public.imgUrl;

const props = defineProps({
  reviews: Array,
});
</script>
