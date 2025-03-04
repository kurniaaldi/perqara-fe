<template>
  <NuxtLayout>
    <div class="container relative w-full pt-64">
      <img
        src="~/assets/images/banner.png"
        alt="MoovieTime Logo"
        class="object-cover opacity-20 w-full h-full absolute top-0 left-0 z-0"
      />
      <div class="absolute top-[124px]">
        <MovieDetail />
      </div>

      <div class="h-20 bg-black bg-opacity-50 w-full"></div>
      <div class="bg-white w-full h-full px-32 pb-14 pt-32">
        <p class="text-red-600">REVIEWS</p>
        <div class="grid grid-cols-2 gap-4 w-full">
          <CardReview />
          <CardReview />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
