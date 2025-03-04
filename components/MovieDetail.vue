<template>
  <div class="flex items-start gap-4 px-32">
    <img
      src="~/assets/images/movie_image.png"
      alt="MoovieTime Logo"
      class="w-56 h-full"
    />
    <div class="space-y-4">
      <p class="text-white text-lg">2020</p>
      <p class="text-white text-4xl">Wonder Woman 1984</p>
      <p class="text-white text-sm">Fantasy, Action, Adventure</p>
      <div class="movie-stats flex items-center text-white p-4 w-full">
        <div class="flex items-center space-x-2 pr-6 border-r border-gray-500">
          <span class="text-yellow-400 text-xl">⭐</span>
          <span class="text-4xl font-bold"> 7.0 </span>
        </div>

        <div class="grid grid-cols-5 gap-6 pl-6 text-xs">
          <div class="text-xs text-gray-400 border-r border-gray-500 pr-6">
            <p class="font-semibold">USER SCORE</p>
            <p class="text-white font-medium">3621 Votes</p>
          </div>
          <div class="text-xs text-gray-400 border-r border-gray-500 pr-6">
            <p class="font-semibold">USER SCORE</p>
            <p class="text-white font-medium">3621 Votes</p>
          </div>
          <div class="text-xs text-gray-400 border-r border-gray-500 pr-6">
            <p class="font-semibold">USER SCORE</p>
            <p class="text-white font-medium">3621 Votes</p>
          </div>
          <div class="text-xs text-gray-400 border-r border-gray-500 pr-6">
            <p class="font-semibold">USER SCORE</p>
            <p class="text-white font-medium">3621 Votes</p>
          </div>
          <div class="text-xs text-gray-400">
            <p class="font-semibold">USER SCORE</p>
            <p class="text-white font-medium">3621 Votes</p>
          </div>
        </div>
      </div>
      <div class="flex items-start flex-col gap-2 text-sm">
        <p class="text-red-600">OVERVIEW</p>
        <p class="w-1/2">
          Wonder Woman comes into conflict with the Soviet Union during the Cold
          War in the 1980s and finds a formidable foe by the name of the
          Cheetah.
        </p>
      </div>
    </div>
  </div>
</template>
