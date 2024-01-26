<template>
  <a
    :href="props.href"
    target="_blank"
    class="flex gap-4 rounded-lg px-6 py-3 bg-stone-700 hover:bg-stone-600"
  >
    <div class="text-stone-400 w-20 shrink-0">{{ props.date }}</div>
    <div class="shrink flex flex-col gap-1">
      <div class="font-bold text-white">{{ props.title }}</div>
      <div class="text-stone-400 text-sm">
        from <span class="font-bold">{{ props.from }}</span>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  from: string;
  date: string;
  href: string;
}>();
</script>
