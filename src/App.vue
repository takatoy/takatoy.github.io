<template>
  <div class="mx-auto py-12 md:pt-24 max-w-4xl px-8">
    <div class="flex flex-col gap-8 md:flex-row md:gap-12 md:items-center">
      <img
        class="rounded-full h-44 w-44 md:h-60 md:w-60 shadow-lg"
        src="/img/portrait.jpg"
      />
      <div class="flex flex-col">
        <h1 class="font-bold text-2xl md:text-4xl">Takato Yamazaki</h1>
        <div class="text-neutral-400 mt-1 md:text-lg md:mt-2">
          <a
            class="hover:text-neutral-300 hover:underline"
            href="mailto:takato@yamazaki.dev"
            >takato@yamazaki.dev</a
          >
        </div>
        <div class="mt-4 md:text-lg">
          I am a researcher and engineer working at
          <a
            class="text-orange-300 hover:text-orange-200 hover:underline text-nowrap"
            href="https://www.lycorp.co.jp/"
            >LY Corporation</a
          >
          and
          <a
            class="text-orange-300 hover:text-orange-200 hover:underline text-nowrap"
            href="https://www.sbintuitions.co.jp/"
            >SB Intuitions Corp</a
          >. My research interest is in dialogue systems.
        </div>
      </div>
    </div>
    <div class="mt-14">
      <h2 class="font-bold text-xl md:text-2xl">Work Experience</h2>
      <ul class="flex flex-col gap-4 mt-4">
        <li class="flex gap-6 rounded-lg p-4 bg-neutral-700">
          <div class="">2023.11 - Present</div>
          <div class="shrink flex flex-col">
            <div class="font-bold text-xl">SB Intuitions Corporation</div>
            <div class="text-neutral-400">Engineer</div>
          </div>
        </li>
        <li class="flex gap-6 rounded-lg p-4 bg-neutral-700">
          <div class="">2023.10 - Present</div>
          <div class="shrink flex flex-col">
            <div class="font-bold text-xl">
              LY Corporation
              <span class="text-neutral-400 text-sm"
                >(formerly LINE Corporation)</span
              >
            </div>
            <div class="text-neutral-400">Senior Engineer</div>
          </div>
        </li>
        <li class="flex gap-6 rounded-lg p-4 bg-neutral-700">
          <div class="">2021.04 - 2023.10</div>
          <div class="shrink flex flex-col">
            <div class="font-bold text-xl">LINE Corporation</div>
            <div class="text-neutral-400">
              Senior Engineer <span class="text-xs">(2021.04 - 2023.10)</span> /
              Engineer
              <span class="text-xs">(2023.09 - 2023.10)</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="mt-14">
      <h2 class="font-bold text-xl md:text-2xl">Education</h2>
    </div>
    <div class="mt-14">
      <h2 class="font-bold text-xl md:text-2xl">Publication</h2>
    </div>
    <div class="mt-14">
      <h2 class="font-bold text-xl md:text-2xl">Awards</h2>
    </div>
    <div class="mt-14">
      <h2 class="font-bold text-xl md:text-2xl">Activities</h2>
    </div>
    <div class="mt-14">
      <h2 class="font-bold text-xl md:text-2xl">Skills</h2>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
