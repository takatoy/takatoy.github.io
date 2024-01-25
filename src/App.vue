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
    <div class="relative mt-14">
      <h2
        class="py-3 md:py-4 bg-neutral-800/60 backdrop-blur-sm top-0 sticky font-bold text-xl text-white md:text-2xl"
      >
        <span class="text-neutral-500">##</span> Work Experience
      </h2>
      <div class="flex flex-col mt-8">
        <WorkExperienceItem
          period="Sep. 2023 - Present"
          company="SB Intuitions Corp."
          companyNote="(Tokyo)"
          companyHref="https://www.sbintuitions.co.jp/"
          jobTitle="Engineer"
        >
          <li>Creating instruction data for Large Language Models (LLM)</li>
          <li>Working on developing and researching dialog systems</li>
          <li>Working on full-stack development of LLM applications</li>
        </WorkExperienceItem>
        <WorkExperienceItem
          class="mt-6"
          period="Oct. 2023 - Present"
          company="LY Corporation"
          companyNote="(Tokyo, formerly LINE Corporation)"
          companyHref="https://www.lycorp.co.jp/"
          jobTitle="Senior Engineer"
        >
        </WorkExperienceItem>
        <WorkExperienceItem
          class="mt-6"
          period="Apr. 2021 - Oct. 2023"
          company="LINE Corporation"
          companyNote="(Tokyo)"
          companyHref="https://linecorp.com/"
          jobTitle="Senior Engineer (from Sep. 2023) ← Engineer"
        >
          <li>Worked as a Director/Engineer of the Dialogue Systems Unit</li>
          <li>Worked on full-stack development of LLM applications</li>
          <!-- <li>
            Developed core technologies for Natural Language Processing (NLP)
          </li> -->
        </WorkExperienceItem>
        <Accordion>
          <div
            class="flex flex-col gap-6 overflow-hidden"
            v-if="showInternships"
          >
            <WorkExperienceItem
              class="mt-6"
              period="Apr. 2019 - Apr. 2021"
              company="National Institiute of Informatics"
              companyNote="(Tokyo)"
              companyHref="https://www.nii.ac.jp/"
              jobTitle="Research Assistant"
            >
              <li>
                Worked as a developer in research projects (e.g. automatic
                annotation)
              </li>
            </WorkExperienceItem>
            <WorkExperienceItem
              period="Jan. 2018 - May 2019"
              company="Mobile Factory Inc."
              companyNote="(Tokyo)"
              companyHref="https://www.mobilefactory.jp/"
              jobTitle="Part-time Job"
            >
              <li>Developed an OSS Blockchain framework with TypeScript</li>
              <!-- <li>Received the Rookie of the Year Award within the company</li> -->
            </WorkExperienceItem>
            <WorkExperienceItem
              period="Jul. 2017 - Aug. 2017"
              company="Rakuten Inc."
              companyNote="(Tokyo)"
              companyHref="https://corp.rakuten.co.jp/"
              jobTitle="Internship"
            >
              <li>Worked as a server-side web engineer using Java</li>
            </WorkExperienceItem>
            <WorkExperienceItem
              period="Jan. 2016 - Oct. 2017"
              company="Diverta Inc."
              companyNote="(Tokyo)"
              companyHref="https://www.diverta.co.jp/"
              jobTitle="Part-time Job"
            >
              <li>
                Worked as a server/client-side web engineer using PHP and
                JavaScript
              </li>
            </WorkExperienceItem>
          </div>
        </Accordion>
        <div class="flex items-center mt-6">
          <div class="flex-1 h-[1px] bg-neutral-600"></div>
          <button
            class="text-sm mx-2 px-2 py-1 text-neutral-400 hover:bg-neutral-700 rounded-md"
            @click="showInternships = !showInternships"
          >
            {{ showInternships ? "Hide" : "Show" }} Internships and Part-time
            Jobs
          </button>
          <div class="flex-1 h-[1px] bg-neutral-600"></div>
        </div>
      </div>
    </div>
    <div class="mt-16">
      <h2
        class="py-3 md:py-4 bg-neutral-800/60 backdrop-blur-sm top-0 sticky font-bold text-xl text-white md:text-2xl"
      >
        <span class="text-neutral-500">##</span> Education
      </h2>
      <div class="flex flex-col gap-6 mt-8">
        <WorkExperienceItem
          period="Apr. 2019 - Apr. 2021"
          company="Master of Information Science and Technology"
          companyHref="https://www.i.u-tokyo.ac.jp/"
          jobTitle="The University of Tokyo"
        >
          <li>
            Supervisor:
            <a
              class="text-orange-300 hover:text-orange-200 hover:underline"
              href="https://www-al.nii.ac.jp/"
              >Akiko Aizawa</a
            >
          </li>
          <li>Research Topic: Dialogue Systems, Reinforcement Learning</li>
        </WorkExperienceItem>
        <WorkExperienceItem
          period="Apr. 2019 - Apr. 2021"
          company="B.E. in Computer Science and Engineering"
          companyHref="https://www.fse.sci.waseda.ac.jp/"
          jobTitle="Waseda University"
        >
          <li>
            Supervisor:
            <a
              class="text-orange-300 hover:text-orange-200 hover:underline"
              href="https://www.sugawara.org/"
              >Toshiharu Sugawara</a
            >
          </li>
          <li>Research Topic: Multi-Agent Systems</li>
        </WorkExperienceItem>
      </div>
    </div>
    <div class="mt-16">
      <h2
        class="py-3 md:py-4 bg-neutral-800/60 backdrop-blur-sm top-0 sticky font-bold text-xl text-white md:text-2xl"
      >
        <span class="text-neutral-500">##</span> Publication
      </h2>
      <h3 class="mt-4 text-lg font-bold">
        <span class="text-neutral-500">###</span> Journal
      </h3>
      <div></div>
    </div>
    <div class="mt-16">
      <h2
        class="py-3 md:py-4 bg-neutral-800/60 backdrop-blur-sm top-0 sticky font-bold text-xl text-white md:text-2xl"
      >
        <span class="text-neutral-500">##</span> Awards
      </h2>
    </div>
    <div class="mt-16">
      <h2
        class="py-3 md:py-4 bg-neutral-800/60 backdrop-blur-sm top-0 sticky font-bold text-xl text-white md:text-2xl"
      >
        <span class="text-neutral-500">##</span> Activities
      </h2>
    </div>
    <div class="mt-16">
      <h2
        class="py-3 md:py-4 bg-neutral-800/60 backdrop-blur-sm top-0 sticky font-bold text-xl text-white md:text-2xl"
      >
        <span class="text-neutral-500">##</span> Skills
      </h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Accordion from "./components/Accordion.vue";
import WorkExperienceItem from "./components/WorkExperienceItem.vue";

const showInternships = ref(false);
</script>
