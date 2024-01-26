<template>
  <li
    class="flex flex-col md:gap-6 md:flex-row rounded-lg px-6 py-4 bg-stone-700"
  >
    <div class="text-stone-400 w-40 shrink-0">{{ props.period }}</div>
    <div class="shrink flex flex-col mt-2 md:mt-0">
      <div>
        <span class="font-bold text-xl text-white">
          <a
            class="hover:text-stone-200 hover:underline"
            :href="props.companyHref"
            target="_blank"
            v-if="props.companyHref"
            >{{ props.company }}</a
          >
          <span v-else>{{ props.company }}</span>
        </span>
        <span class="ml-2 text-stone-400 text-sm" v-if="companyNote">{{
          companyNote
        }}</span>
      </div>
      <div class="text-stone-400 font-bold mt-1">{{ props.jobTitle }}</div>
      <ul
        class="flex flex-col list-disc list-outside ml-5 mt-4 md:mt-2"
        v-if="$slots.default"
      >
        <slot />
      </ul>
    </div>
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  period: string;
  company: string;
  companyHref?: string;
  companyNote?: string;
  jobTitle: string;
}>();
</script>
