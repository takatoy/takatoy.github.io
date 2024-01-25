<template>
  <div class="mx-auto py-12 md:pt-24 max-w-4xl px-8">
    <div class="flex flex-col gap-8 md:flex-row md:gap-12 md:items-center">
      <img
        class="rounded-full h-44 w-44 md:h-60 md:w-60 shadow-lg"
        src="/img/portrait.jpg"
      />
      <div class="flex flex-col">
        <h1 class="font-bold text-2xl text-white md:text-4xl">
          Takato Yamazaki
        </h1>
        <div class="text-neutral-400 mt-1 md:text-lg md:mt-2">
          <a
            class="hover:text-neutral-300 hover:underline"
            href="mailto:takato@yamazaki.dev"
            target="_blank"
            >takato@yamazaki.dev</a
          >
        </div>
        <div class="mt-4 md:text-lg">
          I'm an engineer and researcher working at
          <a
            class="text-orange-300 hover:text-orange-200 hover:underline text-nowrap"
            href="https://www.lycorp.co.jp/"
            target="_blank"
            >LY Corporation</a
          >
          and
          <a
            class="text-orange-300 hover:text-orange-200 hover:underline text-nowrap"
            href="https://www.sbintuitions.co.jp/"
            target="_blank"
            >SB Intuitions Corp</a
          >. My research interest is in dialogue systems.
        </div>
      </div>
    </div>
    <div class="mt-14">
      <h2 class="font-bold text-xl text-white md:text-2xl">Work Experience</h2>
      <ul class="flex flex-col gap-6 mt-8">
        <WorkExperienceItem
          period="Nov. 2023 - Present"
          company="SB Intuitions Corp."
          companyHref="https://www.sbintuitions.co.jp/"
          jobTitle="Engineer"
        >
          <li>Instruction data creation for Large Language Models (LLM)</li>
          <li>Full stack developing for LLM applications</li>
        </WorkExperienceItem>
        <WorkExperienceItem
          period="Oct. 2023 - Present"
          company="LY Corporation"
          companyNote="(formerly LINE Corporation)"
          companyHref="https://www.lycorp.co.jp/"
          jobTitle="Senior Engineer"
        >
          <li>Instruction data creation for Large Language Models (LLM)</li>
          <li>Full stack developing for LLM applications</li>
        </WorkExperienceItem>
        <WorkExperienceItem
          period="Apr. 2021 - Oct. 2023"
          company="LINE Corporation"
          companyHref="https://linecorp.com/"
          jobTitle="Senior Engineer ← Engineer (until Sep. 2023)"
        >
          <li>Instruction data creation for Large Language Models (LLM)</li>
          <li>Full stack developing for LLM applications</li>
        </WorkExperienceItem>
        <WorkExperienceItem
          period="Apr. 2021 - Oct. 2023"
          company="Mobile Factory Inc."
          companyHref="https://www.mobilefactory.jp/"
          jobTitle="Part-time Job"
        >
          <li>Instruction data creation for Large Language Models (LLM)</li>
          <li>Full stack developing for LLM applications</li>
        </WorkExperienceItem>
        <WorkExperienceItem
          period="Apr. 2021 - Oct. 2023"
          company="Rakuten Inc."
          companyHref="https://corp.rakuten.co.jp/"
          jobTitle="Internship"
        >
          <li>Instruction data creation for Large Language Models (LLM)</li>
          <li>Full stack developing for LLM applications</li>
        </WorkExperienceItem>
        <WorkExperienceItem
          period="Apr. 2021 - Oct. 2023"
          company="Diverta Inc."
          companyHref="https://www.diverta.co.jp/"
          jobTitle="Part-time Job"
        >
          <li>Instruction data creation for Large Language Models (LLM)</li>
          <li>Full stack developing for LLM applications</li>
        </WorkExperienceItem>
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

<script setup lang="ts">
import WorkExperienceItem from "./components/WorkExperienceItem.vue";
</script>
