<template>
  <div class="flex flex-col rounded-lg px-6 py-3 bg-neutral-700">
    <div class="font-bold text-white">{{ props.title }}</div>
    <div class="text-neutral-400 text-sm mt-1">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>
