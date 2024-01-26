<template>
  <div class="flex gap-4 rounded-lg px-6 py-3 bg-stone-700">
    <div class="flex flex-col w-20 shrink-0 text-stone-400">
      <div>{{ props.date }}</div>
      <div class="font-bold">{{ props.type }}</div>
    </div>
    <div class="shrink flex flex-col">
      <div class="font-bold text-white">{{ props.title }}</div>
      <div class="text-stone-400 text-sm" v-if="props.at">
        {{ props.at }}
      </div>
      <div class="mt-3">
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
