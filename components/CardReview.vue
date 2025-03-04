<template>
  <div
    class="review-card bg-[#F9F9F9] p-4 rounded-xl shadow-md flex space-x-4 h-60"
  >
    <div class="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>

    <div class="flex-1">
      <div class="flex justify-between items-start">
        <div>
          <p class="font-bold text-gray-800">username</p>
          <p class="text-gray-500 text-sm">date</p>
        </div>
        <div
          class="bg-[#C4C4C447] px-2 py-1 rounded-lg flex items-start space-x-1"
        >
          <span class="text-yellow-500 text-xs">⭐</span>
          <span class="text-4xl font-bold text-gray-800">8.0</span>
        </div>
      </div>

      <p class="text-gray-600 italic mt-2">review</p>
    </div>
  </div>
</template>
