import { defineStore } from 'pinia';

export const useFormStore = defineStore('form', () => {
  const form = ref(null);
  return {
    form,
  };
});
