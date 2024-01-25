<template>
  <a
    :href="props.href"
    target="_blank"
    class="flex flex-col rounded-lg px-6 py-4 bg-neutral-700 hover:bg-neutral-600"
  >
    <div class="font-bold text-white">{{ props.title }}</div>
    <div
      class="text-neutral-400 text-sm mt-3"
      v-html="boldMyself(props.authors)"
    ></div>
    <div class="text-sm mt-3">
      <span class="font-bold">{{ props.publishedAt }}</span
      >, {{ props.date }}.
    </div>
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  authors: string;
  publishedAt: string;
  date: string;
  href: string;
}>();

const boldMyself = (authors: string) => {
  return authors.replace(
    "Takato Yamazaki",
    '<span class="underline">Takato Yamazaki</span>'
  );
};
</script>
