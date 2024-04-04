<template>
  <div
    class="flex flex-col md:flex-row gap-4 rounded-lg px-6 py-3 bg-neutral-700"
  >
    <div
      class="flex flex-row mb-2 md:flex-col md:w-20 md:mb-0 shrink-0 text-neutral-400"
    >
      <div>{{ props.date }}</div>
      <div class="font-bold ml-2 md:ml-0">{{ props.type }}</div>
    </div>
    <div class="shrink flex flex-col">
      <div class="font-bold text-white">{{ props.title }}</div>
      <div class="mt-2 md:mt-1 text-neutral-400 text-sm" v-if="props.at">
        {{ props.at }}
      </div>
      <div :class="props.at ? 'mt-4' : 'mt-2'">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  type: string;
  date: string;
  title: string;
  at?: string;
}>();
</script>
