<template>
  <Transition
    name="accordion"
    :onBeforeEnter="onBeforeEnterAccordion"
    :onEnter="onEnterAccordion"
    :onBeforeLeave="onBeforeLeaveAccordion"
    :onLeave="onLeaveAccordion"
  >
    <slot />
  </Transition>
</template>

<style lang="postcss">
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.5s ease-in-out;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
}
</style>

<script setup lang="ts">
const onBeforeEnterAccordion = (el: Element) => {
  (el as HTMLDivElement).style.height = "0";
};

const onEnterAccordion = (el: Element) => {
  (el as HTMLDivElement).style.height = el.scrollHeight + "px";
};

const onBeforeLeaveAccordion = (el: Element) => {
  (el as HTMLDivElement).style.height = el.scrollHeight + "px";
};

const onLeaveAccordion = (el: Element) => {
  (el as HTMLDivElement).style.height = "0";
};
</script>
