<template>
  <div class="text-lg grid grid-cols-[1fr_1fr] p-8 gap-4 bg-gray-50">
    <p>{{ t('hello') }}</p>
    <p>{{ locale }}</p>
    <button type="button" class="button bg-red-500">I do nothing</button>
    <a class="btn" href="#">I do nothing</a>
  </div>
</template>
<script setup>
const { t, locale, locales } = useI18n();

const formStore = useFormStore();
const { form } = storeToRefs(formStore);
</script>
