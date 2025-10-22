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
        <div class="mt-4 flex items-center gap-6">
          <a href="https://github.com/takatoy" target="_blank" class="flex">
            <img class="h-6" src="/img/github_logo.svg" />
          </a>
          <a href="https://x.com/y_takaten" target="_blank" class="flex">
            <img class="h-6" src="/img/x_logo.svg" />
          </a>
          <a
            href="https://jp.linkedin.com/in/takato-yamazaki-b96370140"
            target="_blank"
            class="flex"
          >
            <img class="h-6" src="/img/linked_in_logo.png" />
          </a>
        </div>
        <div class="mt-4 md:text-lg">
          I'm a developer and researcher at
          <a
            class="text-orange-300 hover:text-orange-200 hover:underline text-nowrap"
            href="https://www.sbintuitions.co.jp/"
            target="_blank"
            >SB Intuitions Corp.</a
          >
          My research focuses on dialogue systems, and I’ve recently begun
          exploring Human-Computer Interaction (HCI).
        </div>
      </div>
    </div>
    <div class="relative mt-14">
      <h2
        class="py-3 bg-neutral-800/60 backdrop-blur-sm top-0 sticky font-bold text-xl text-white md:text-2xl"
      >
        <span class="text-orange-300">##</span> Work Experience
      </h2>
      <div class="flex flex-col mt-4">
        <WorkExperienceItem
          period="Sep. 2023 - Present"
          company="SB Intuitions Corp."
          companyNote="(Tokyo)"
          companyHref="https://www.sbintuitions.co.jp/"
          jobTitle="Senior Research Engineer"
        >
          <li>Conducting research on Human-Computer Interaction (HCI)</li>
          <li>
            Creating instruction datasets for Large Language Models (LLMs)
          </li>
          <li>Developing and researching dialogue systems</li>
          <li>Building full-stack LLM-powered applications</li>
        </WorkExperienceItem>
        <WorkExperienceItem
          class="mt-6"
          period="Oct. 2023 - Jun. 2024"
          company="LY Corporation"
          companyNote="(Tokyo, formerly LINE Corp.)"
          companyHref="https://www.lycorp.co.jp/"
          jobTitle="Senior Software Engineer"
        >
        </WorkExperienceItem>
        <WorkExperienceItem
          class="mt-6"
          period="Apr. 2021 - Oct. 2023"
          company="LINE Corporation"
          companyNote="(Tokyo)"
          companyHref="https://linecorp.com/"
          jobTitle="Senior Software Engineer ← Software Engineer"
        >
          <li>Served as Director and Developer in the Dialogue Systems Unit</li>
          <li>Led full-stack development of LLM-based applications</li>
          <li>Promoted to Senior Software Engineer in September 2023</li>
        </WorkExperienceItem>
        <Accordion>
          <div
            class="flex flex-col gap-6 overflow-hidden"
            v-if="showInternships"
          >
            <WorkExperienceItem
              class="mt-6"
              period="Apr. 2019 - Apr. 2021"
              company="National Institute of Informatics"
              companyNote="(Tokyo)"
              companyHref="https://www.nii.ac.jp/"
              jobTitle="Research Assistant"
            >
              <li>
                Developed software for research projects, including automatic
                annotation systems
              </li>
            </WorkExperienceItem>
            <WorkExperienceItem
              period="Jan. 2018 - May 2019"
              company="Mobile Factory Inc."
              companyNote="(Tokyo)"
              companyHref="https://www.mobilefactory.jp/"
              jobTitle="Part-time Engineer"
            >
              <li>
                Developed an open-source blockchain framework in TypeScript
              </li>
              <!-- <li>Received the Rookie of the Year Award within the company</li> -->
            </WorkExperienceItem>
            <WorkExperienceItem
              period="Jul. 2017 - Aug. 2017"
              company="Rakuten Inc."
              companyNote="(Tokyo)"
              companyHref="https://corp.rakuten.co.jp/"
              jobTitle="Internship"
            >
              <li>Worked as a server‑side engineer (Java)</li>
            </WorkExperienceItem>
            <WorkExperienceItem
              period="Jan. 2016 - Oct. 2017"
              company="Diverta Inc."
              companyNote="(Tokyo)"
              companyHref="https://www.diverta.co.jp/"
              jobTitle="Part-time Engineer"
            >
              <li>
                Worked as a server‑ and client‑side web engineer using PHP and
                JavaScript
              </li>
            </WorkExperienceItem>
          </div>
        </Accordion>
        <div class="flex items-center mt-6">
          <div class="flex-1 h-px bg-neutral-600"></div>
          <button
            class="text-sm mx-2 px-2 py-1 text-neutral-400 hover:bg-neutral-700 rounded-md"
            @click="showInternships = !showInternships"
          >
            {{ showInternships ? "▲ Hide" : "▼ Show" }} Internships and
            Part-time Jobs
          </button>
          <div class="flex-1 h-px bg-neutral-600"></div>
        </div>
      </div>
    </div>
    <div class="mt-16">
      <h2
        class="py-3 md:py-4 bg-neutral-800/60 backdrop-blur-sm top-0 sticky font-bold text-xl text-white md:text-2xl"
      >
        <span class="text-orange-300">##</span> Education
      </h2>
      <div class="flex flex-col gap-6 mt-4">
        <WorkExperienceItem
          period="Apr. 2019 - Mar. 2021"
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
          <li>Research Topics: Dialogue Systems and Reinforcement Learning</li>
        </WorkExperienceItem>
        <WorkExperienceItem
          period="Apr. 2015 - Mar. 2019"
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
          <li>Research Topics: Multi-Agent Systems</li>
        </WorkExperienceItem>
      </div>
    </div>
    <div class="mt-16">
      <h2
        class="py-3 bg-neutral-800/60 backdrop-blur-sm top-0 sticky font-bold text-xl text-white md:text-2xl"
      >
        <span class="text-orange-300">##</span> Publications
      </h2>
      <h3 class="text-lg font-bold">
        <span class="text-neutral-500">###</span> Journal (First Author,
        Peer-Reviewed)
      </h3>
      <div class="flex flex-col gap-4 mt-4">
        <PublicationItem
          title="Building a hospitable and reliable dialogue system for android robots: a scenario-based approach with large language models"
          authors="Takato Yamazaki, Katsumasa Yoshikawa, Toshiki Kawamoto, Tomoya Mizumoto, Masaya Ohagi, Toshinori Sato"
          publishedAt="Advanced Robotics"
          date="November 2023"
          href="https://www.tandfonline.com/doi/full/10.1080/01691864.2023.2244554"
        />
      </div>
      <h3 class="mt-12 text-lg font-bold">
        <span class="text-neutral-500">###</span> International Conferences
        (First Author, Peer-Reviewed)
      </h3>
      <div class="flex flex-col gap-4 mt-4">
        <PublicationItem
          title="An Open-Domain Avatar Chatbot by Exploiting a Large Language Model"
          authors="Takato Yamazaki, Tomoya Mizumoto, Katsumasa Yoshikawa, Masaya Ohagi, Toshiki Kawamoto, Toshinori Sato"
          publishedAt="Proceedings of the 24th Annual Meeting of the Special Interest Group on Discourse and Dialogue (SIGDIAL)"
          date="September 2023"
          href="https://aclanthology.org/2023.sigdial-1.40/"
        />
        <PublicationItem
          title="Phrase-Level Action Reinforcement Learning for Neural Dialog Response Generation"
          authors="Takato Yamazaki, Akiko Aizawa"
          publishedAt="Findings of the Association for Computational Linguistics: ACL-IJCNLP 2021"
          date="August 2021"
          href="https://aclanthology.org/2021.findings-acl.446/"
        />
      </div>
      <h3 class="mt-12 text-lg font-bold">
        <span class="text-neutral-500">###</span> Other Conferences (First
        Author)
      </h3>
      <div class="flex flex-col gap-4 mt-4">
        <PublicationItem
          title="Evaluating Japanese LLM Tuning for Domain‑Specific Dialogue Using Pseudo‑Dialogue and Preference Data"
          authors="Takato Yamazaki, Junya Takayama, Kyoya Sato, Masaya Ohagi, Katsumasa Yoshikawa, Tomoya Mizumoto"
          publishedAt="Proceedings of the 31st Annual Meeting of the Association for Natural Language Processing (NLP2025)"
          date="March 2025"
          href="https://www.anlp.jp/proceedings/annual_meeting/2025/pdf_dir/P10-19.pdf"
        />
        <PublicationItem
          title="A Speech‑Based Open‑Domain Dialogue System Using HyperCLOVA"
          authors="Takato Yamazaki, Toshiki Kawamoto, Masaya Ohagi, Tomoya Mizumoto, Koga Kobayashi, Katsumasa Yoshikawa, Toshinori Sato"
          publishedAt="JSAI SIG-SLUD Technical Reports, No. 96"
          date="December 2023"
          href="https://www.jstage.jst.go.jp/article/jsaislud/96/0/96_22/_article/-char/ja/"
        />
        <PublicationItem
          title="Tourist Guidance Robot Based on HyperCLOVA"
          authors="Takato Yamazaki, Katsumasa Yoshikawa, Toshiki Kawamoto, Masaya Ohagi, Tomoya Mizumoto, Shuta Ichimura, Yusuke Kida, Toshinori Sato"
          publishedAt="Proceedings of the Dialogue Robot Competition 2022 (DRC2022)"
          date="October 2022"
          href="https://arxiv.org/abs/2210.10400"
        />
        <PublicationItem
          title="Controlling Utterances Based on Interpersonal Relationships in Open‑Domain Dialogue Systems Using Large General‑Purpose Language Models"
          authors="Takato Yamazaki, Toshiki Kawamoto, Katsumasa Yoshikawa, Toshinori Sato"
          publishedAt="Proceedings of the 28th Annual Meeting of the Association for Natural Language Processing (NLP2022)"
          date="March 2022"
          href="https://www.anlp.jp/proceedings/annual_meeting/2022/pdf_dir/G7-3.pdf"
        />
        <PublicationItem
          title="An Open‑Domain Dialogue System Using HyperCLOVA with Persona Consistency and Knowledge Base Integration"
          authors="Takato Yamazaki, Wataru Sakata, Toshiki Kawamoto, Koga Kobayashi, Takashi Uemura, Ayafumi Nakamachi, Seongcheol Lee, Toshinori Sato"
          publishedAt="JSAI SIG-SLUD Technical Reports, No. 93"
          date="November 2021"
          href="https://www.jstage.jst.go.jp/article/jsaislud/93/0/93_113/_article/-char/ja/"
        />
        <PublicationItem
          title="End‑to‑End Utterance Generation Using Neural Phrase Extraction for Task‑Oriented Dialogue"
          authors="Takato Yamazaki, Akiko Aizawa"
          publishedAt="JSAI SIG-SLUD Technical Reports, No. 90"
          date="November 2020"
          href="https://www.jstage.jst.go.jp/article/jsaislud/90/0/90_18/_article/-char/ja/"
          prize="Young Researcher Award"
        />
        <PublicationItem
          title="Memory‑Based Information Completion and Its Efficiency in Distributed Cooperative Search Problems Using Deep Reinforcement Learning"
          authors="Takato Yamazaki, Toshiharu Sugawara"
          publishedAt="IEICE Technical Report (WSSIT2019)"
          date="March 2019"
          href="https://ken.ieice.org/ken/paper/20190309f1MC/"
        />
      </div>
    </div>
    <div class="mt-16">
      <h2
        class="py-3 bg-neutral-800/60 backdrop-blur-sm top-0 sticky font-bold text-xl text-white md:text-2xl"
      >
        <span class="text-orange-300">##</span> Awards
      </h2>
      <div class="flex flex-col gap-3 mt-4">
        <AwardItem
          title="NLP2024 – Special Committee Award"
          from="The Association for Natural Language Processing"
          date="Mar. 2024"
          href="https://www.anlp.jp/nlp2024/award.html"
        />
        <AwardItem
          title="Dialog Robot Competition 2023 – Grand Prize"
          from="Dialog Robot Competition Executive Committee"
          date="Dec. 2023"
          href="https://sites.google.com/view/dialogrobotcompe3/results"
        />
        <AwardItem
          title="Dialog System Live Competition 5 – Open Track Grand Prize"
          from="13th Dialogue System Symposium (SIG-SLUD)"
          date="Dec. 2022"
          href="https://sites.google.com/view/dslc5/%E7%B5%90%E6%9E%9C"
        />
        <AwardItem
          title="Dialog System Live Competition 5 – Situation Track Grand Prize"
          from="13th Dialogue System Symposium (SIG-SLUD)"
          date="Dec. 2022"
          href="https://sites.google.com/view/dslc5/%E7%B5%90%E6%9E%9C"
        />
        <AwardItem
          title="Dialog Robot Competition 2022 – Grand Prize"
          from="Dialog Robot Competition Executive Committee"
          date="Oct. 2022"
          href="https://sites.google.com/view/drc2022-jp/results"
        />
        <AwardItem
          title="Dialog System Live Competition 4 – Open Track Grand Prize"
          from="12th Dialogue System Symposium (SIG-SLUD)"
          date="Nov. 2021"
          href="https://dialog-system-live-competition.github.io/dslc4/result.html"
        />
        <AwardItem
          title="Dialog System Live Competition 4 – Situation Track Grand Prize"
          from="12th Dialogue System Symposium (SIG-SLUD)"
          date="Nov. 2021"
          href="https://dialog-system-live-competition.github.io/dslc4/result.html"
        />
        <AwardItem
          title="Young Researcher Award for Excellent Research"
          from="11th Dialogue System Symposium (SIG-SLUD)"
          date="Nov. 2020"
          href="https://jsai-slud.github.io/sig-slud/archive/award.html"
        />
      </div>
    </div>
    <div class="mt-16">
      <h2
        class="py-3 md:py-4 bg-neutral-800/60 backdrop-blur-sm top-0 sticky font-bold text-xl text-white md:text-2xl"
      >
        <span class="text-orange-300">##</span> Other Activities
      </h2>
      <div class="flex flex-col gap-4 mt-4">
        <ActivityItem
          type="Organizer"
          date="Sep. 2024"
          at=""
          title="Organizer, Dialogue System Live Competition 7"
          ><div class="flex flex-wrap gap-3 md:gap-6 items-center">
            <a
              class="bg-white p-0.5 rounded-md"
              href="https://sites.google.com/view/dslc7/%E3%83%9B%E3%83%BC%E3%83%A0"
              target="_blank"
              ><div
                class="bg-white rounded-md px-1 py-0 text-black font-bold text-sm"
              >
                DSLC 7
              </div></a
            >
          </div></ActivityItem
        >
        <ActivityItem
          type="Article"
          date="Mar. 2024"
          at="IEICE Journal Vol.107 No.7"
          title="Current Status and Future Prospects of Large Language Models — Development and Application in Industry"
          ><div class="flex flex-wrap gap-3 md:gap-6 items-center">
            <a
              class="bg-white px-1 py-0.5 rounded-md"
              href="https://app.journal.ieice.org/trial/107_7/k107_7_653/index.html"
              target="_blank"
              ><img class="h-5" src="/img/eic_logo.png"
            /></a></div
        ></ActivityItem>
        <ActivityItem
          type="Organizer"
          date="Mar. 2024"
          at=""
          title="Local Organizer, INLG 2024"
          ><div class="flex flex-wrap gap-3 md:gap-6 items-center">
            <a
              class="bg-white p-0.5 rounded-md"
              href="https://inlg2024.github.io/organizers.html"
              target="_blank"
              ><img class="h-6" src="/img/inlg_logo.png"
            /></a></div
        ></ActivityItem>
        <ActivityItem
          type="Talk"
          date="Oct. 2023"
          at="NLP Colloquium"
          title="Developing Japanese Dialogue Systems with Large Language Models"
        >
          <div class="flex flex-wrap gap-3 md:gap-6 items-center">
            <a
              href="https://nlp-colloquium-jp.github.io/schedule/2023-10-25_takato-yamazaki/"
              class="flex w-fit pb-1"
              target="_blank"
            >
              <img
                class="h-5 w-fit bg-white rounded-sm px-1 py-0.5"
                src="/img/nlp_colloquium_logo.png"
              />
            </a>
            <a
              href="https://youtu.be/uUvuYnqgY9M?si=sgI2udfzlqk4arNO"
              class="flex w-fit pb-1"
              target="_blank"
            >
              <img class="h-4 w-fit" src="/img/yt_logo.png" />
            </a>
          </div>
        </ActivityItem>
        <ActivityItem
          type="Talk"
          date="Sep. 2023"
          at="FastLabel × LayerX × LINE: Challenges and Solutions in “Generative AI × Product Development”"
          title="How Far Can We Rely on LLMs? Balancing Freedom and Controllability in Development"
        >
          <div class="flex flex-wrap gap-3 md:gap-6 items-center">
            <a
              href="https://logmi.jp/tech/articles/329761"
              class="flex w-fit pb-1"
              target="_blank"
            >
              <img class="h-4 w-fit" src="/img/logmi_logo.svg" />
            </a>
            <a
              href="https://youtu.be/9B7_PPYFQE0?si=6ULNkt1Y0XtgZNPc"
              class="flex w-fit pb-1"
              target="_blank"
            >
              <img class="h-4 w-fit" src="/img/yt_logo.png" />
            </a>
          </div>
        </ActivityItem>
        <ActivityItem
          type="Talk"
          date="Nov. 2022"
          at="Tech-Verse 2022"
          title="Scaling and Application Potential of HyperCLOVA: A Japanese Foundation Model"
        >
          <div class="flex flex-wrap gap-3 md:gap-6 items-center">
            <a
              href="https://tech-verse.me/ja/sessions/52"
              class="flex w-fit pb-1"
              target="_blank"
            >
              <img class="h-5 w-fit" src="/img/tech-verse_logo.svg" />
            </a>
            <a
              href="https://engineering.linecorp.com/ja/interview/tech-verse-2022-scaling-and-potential-uses-for-the-hyperclova-japanese-base-model"
              class="flex w-fit pb-1"
              target="_blank"
            >
              <img class="h-3 w-fit" src="/img/line_dev_logo.svg" />
            </a>
            <a
              href="https://youtu.be/I4o7X3-aqJk?si=xbX4rbLhUwN5LpiG"
              class="flex w-fit pb-1"
              target="_blank"
            >
              <img class="h-4 w-fit" src="/img/yt_logo.png" />
            </a>
          </div>
        </ActivityItem>
      </div>
    </div>
    <div class="mt-16">
      <h2
        class="py-3 md:py-4 bg-neutral-800/60 backdrop-blur-sm top-0 sticky font-bold text-xl text-white md:text-2xl"
      >
        <span class="text-orange-300">##</span> Skills & Languages
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <SkillItem title="Japanese">Native</SkillItem>
        <SkillItem title="English">Fluent (TOEIC 990)</SkillItem>

        <SkillItem title="LLM Applications"
          >Production chat/agent systems; prompt engineering;
          evaluation</SkillItem
        >
        <SkillItem title="Python"
          >Backend (FastAPI); ML (PyTorch); data tooling</SkillItem
        >
        <SkillItem title="JavaScript / TypeScript"
          >Web/native apps (Vue, React, Hono, Electron, etc.)</SkillItem
        >

        <SkillItem title="Cloud">GCP & AWS</SkillItem>
        <SkillItem title="Infrastructure as Code"
          >Terraform; GitHub Actions CI/CD; Docker</SkillItem
        >
        <SkillItem title="Data & Databases"
          >PostgreSQL; BigQuery; Redis</SkillItem
        >

        <SkillItem title="Frontend"
          >HTML/CSS; Tailwind CSS; UI design</SkillItem
        >
        <SkillItem title="Java">Web and module development</SkillItem>
        <SkillItem title="C / C++"
          >Module development; competitive programming</SkillItem
        >
        <SkillItem title="PHP">Web development</SkillItem>
      </div>
    </div>
    <div class="mt-16 w-full text-center text-neutral-400 text-sm">
      Updated on 2025/10/23
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Accordion from "./components/Accordion.vue";
import WorkExperienceItem from "./components/WorkExperienceItem.vue";
import PublicationItem from "./components/PublicationItem.vue";
import AwardItem from "./components/AwardItem.vue";
import ActivityItem from "./components/ActivityItem.vue";
import SkillItem from "./components/SkillItem.vue";

const showInternships = ref(false);
</script>
