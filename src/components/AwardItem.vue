<template>
  <a
    :href="props.href"
    target="_blank"
    class="flex flex-col gap-2 md:flex-row md:gap-4 rounded-lg px-6 py-3 bg-neutral-700 hover:bg-neutral-600"
  >
    <div class="text-neutral-400 w-20 shrink-0">{{ props.date }}</div>
    <div class="shrink flex flex-col gap-2">
      <div class="font-bold text-white">
        {{ props.title }}
        <img
          class="inline-flex text-white h-4 stroke-neutral-400"
          src="/img/external_link.svg"
        />
      </div>
      <div class="text-neutral-400 text-sm">
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
