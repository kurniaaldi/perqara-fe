import { defineStore } from "pinia";

export const useSearch = defineStore("search", {
  state: () => ({
    query: "",
  }),
  actions: {
    setQuery(value) {
      this.query = value;
    },
  },
});
