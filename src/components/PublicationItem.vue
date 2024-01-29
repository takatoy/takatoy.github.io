<template>
  <a
    :href="props.href"
    target="_blank"
    class="flex flex-col rounded-lg px-6 py-4 bg-neutral-700 hover:bg-neutral-600 leading-relaxed"
  >
    <div class="font-bold text-white">
      {{ props.title }}
      <img class="inline text-white h-4" src="/img/external_link.svg" />
    </div>
    <div
      class="text-neutral-400 text-sm mt-3"
      v-html="boldMyself(props.authors)"
    ></div>
    <div class="text-sm mt-3">
      <span class="font-bold">{{ props.publishedAt }}</span
      >, {{ props.date }}.<span
        class="font-bold text-orange-300 ml-2"
        v-if="props.prize"
      >
        {{ props.prize }}</span
      >
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
  prize?: string;
}>();

const boldMyself = (authors: string) => {
  authors = authors.replace(
    "Takato Yamazaki",
    '<span class="underline">Takato Yamazaki</span>'
  );
  authors = authors.replace("山崎天", '<span class="underline">山崎天</span>');

  return authors;
};
</script>
