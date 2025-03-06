<template>
  <aside
    class="bg-gray-900 text-gray-200 p-4 rounded-lg w-full mobile:col-span-4"
  >
    <div class="mb-6">
      <label class="text-base font-semibold block mb-2">Sort Result By</label>
      <select
        v-model="selectedSort"
        @change="applyFilters"
        class="w-full bg-gray-800 text-gray-300 px-3 py-2 rounded-md"
      >
        <option
          v-for="(sort, index) in sortList"
          :key="index"
          :value="sort.value"
          class="py-2"
        >
          {{ sort.label }}
        </option>
      </select>
    </div>
    <hr class="mb-4" />

    <div>
      <h3 class="text-base font-semibold mb-2">Genres</h3>
      <hr class="my-4" />

      <div
        v-for="genre in genres"
        :key="genre.id"
        class="flex items-center justify-between space-x-2 py-1"
      >
        <label :for="genre.id" class="text-sm">{{ genre.name }}</label>

        <!-- Custom Checkbox -->
        <label class="relative flex items-center cursor-pointer">
          <input
            type="checkbox"
            :id="genre.id"
            :value="genre.id"
            v-model="selectedGenres"
            class="peer hidden"
          />
          <div
            class="w-4 h-4 rounded flex border border-[#FFFFFF33] items-center justify-center bg-gray-600 peer-checked:bg-red-500 transition"
          >
            <svg
              v-if="selectedGenres.includes(genre.id)"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              class="w-4 h-4"
            >
              <path
                fill-rule="evenodd"
                d="M9 16.17l-4.17-4.17-1.41 1.41L9 19l10-10-1.41-1.41L9 16.17z"
              />
            </svg>
          </div>
        </label>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref, defineProps, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const selectedSort = ref(route.query.sort_by || "popularity.dsc");
const selectedGenres = ref(
  route.query.with_genres ? route.query.with_genres.split(",") : [],
);

const sortList = [
  { value: "popularity.asc", label: "Popularity Ascending" },
  { value: "popularity.dsc", label: "Popularity Descending" },
  { value: "primary_release_date.asc", label: "Release Date Ascending" },
  { value: "primary_release_date.dsc", label: "Release Date Descending" },
  { value: "vote_average.asc", label: "Rating Ascending" },
  { value: "vote_average.dsc", label: "Rating Descending" },
];

defineProps({
  genres: Array,
});

watch(selectedGenres, () => {
  applyFilters();
});

const applyFilters = () => {
  const queryParams = {
    type: route.query.type ?? "movie",
    with_genres: selectedGenres.value.join(","),
    sort_by: selectedSort.value,
  };

  router.push({ path: "/movies", query: queryParams });
};
</script>
