<template>
  <aside
    class="bg-gray-900 text-gray-200 p-4 rounded-lg w-full mobile:col-span-4"
  >
    <div class="mb-6">
      <label class="text-base font-semibold block mb-2">Sort Result By</label>
      <select
        v-model="selectedSort"
        class="w-full bg-gray-800 text-gray-300 px-3 py-2 rounded-md"
      >
        <option value="popularity">Popularity</option>
        <option value="release_date">Release Date</option>
        <option value="rating">Rating</option>
      </select>
    </div>

    <div>
      <h3 class="text-base font-semibold mb-2">Genres</h3>
      <div
        v-for="genre in genres"
        :key="genre.id"
        class="flex items-center justify-between space-x-2 py-1"
      >
        <label :for="genre.id" class="text-sm">{{ genre.name }}</label>
        <input
          type="checkbox"
          :id="genre.id"
          :value="genre.id"
          v-model="selectedGenres"
          class="form-checkbox h-4 w-4 text-red-500 bg-gray-800 border-gray-600 rounded focus:ring-red-500"
        />
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref, defineProps } from "vue";
const router = useRouter();

const selectedSort = ref("");
const selectedGenres = ref([]);

defineProps({
  genres: Array,
});

watch(selectedGenres, (newVal) => {
  applyFilters();
});

const applyFilters = () => {
  const queryParams = {
    with_genres: selectedGenres.value.join(","),
  };

  router.push({ path: "/movies", query: queryParams });
};
</script>

<style scoped>
.form-checkbox:checked {
  background-color: #ef4444;
  border-color: #ef4444;
}
</style>
