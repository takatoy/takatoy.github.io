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
          I'm a developer and researcher working at
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
          jobTitle="Software Engineer"
        >
          <li>Creating instruction data for Large Language Models (LLM)</li>
          <li>Working on developing and researching dialog systems</li>
          <li>Working on full-stack development of LLM applications</li>
        </WorkExperienceItem>
        <WorkExperienceItem
          class="mt-6"
          period="Oct. 2023 - Present"
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
          <li>Worked as a Director/Developer of the Dialogue Systems Unit</li>
          <li>Worked on full-stack development of LLM applications</li>
          <li>Senior Software Engineer since September 2023</li>
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
            {{ showInternships ? "▲ Hide" : "▼ Show" }} Internships and
            Part-time Jobs
          </button>
          <div class="flex-1 h-[1px] bg-neutral-600"></div>
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
        class="py-3 bg-neutral-800/60 backdrop-blur-sm top-0 sticky font-bold text-xl text-white md:text-2xl"
      >
        <span class="text-orange-300">##</span> Publications
      </h2>
      <h3 class="text-lg font-bold">
        <span class="text-neutral-500">###</span> Journal (First Author,
        Referred)
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
        (First Author, Referred)
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
          title="HyperCLOVA を用いた音声雑談対話システム"
          authors="山崎天, 川本稔己, 大萩雅也, 水本智也, 小林滉河, 吉川克正, 佐藤敏紀"
          publishedAt="人工知能学会研究会資料 言語・音声理解と対話処理研究会 第96回 (SIG-SLUD)"
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
          title="大規模汎用言語モデルを用いた雑談対話システムの対人関係性に基づく発話制御の検討"
          authors="山崎天, 川本稔己, 吉川克正, 佐藤敏紀"
          publishedAt="言語処理学会第28回年次大会 発表論文集 (NLP2022)"
          date="March 2022"
          href="https://www.anlp.jp/proceedings/annual_meeting/2022/pdf_dir/G7-3.pdf"
        />
        <PublicationItem
          title="ペルソナ一貫性の考慮と知識ベースを統合した HyperCLOVA を用いた雑談対話システム"
          authors="山崎天, 坂田亘, 川本稔己, 小林滉河, 上村卓史, 中町礼文, 李聖哲, 佐藤敏紀"
          publishedAt="人工知能学会研究会資料 言語・音声理解と対話処理研究会 第93回 (SIG-SLUD)"
          date="November 2021"
          href="https://www.jstage.jst.go.jp/article/jsaislud/93/0/93_113/_article/-char/ja/"
        />
        <PublicationItem
          title="タスク指向対話におけるニューラル句抽出を用いた End-to-End 発話生成"
          authors="山崎天, 坂田亘, 川本稔己, 小林滉河, 上村卓史, 中町礼文, 李聖哲, 佐藤敏紀"
          publishedAt="人工知能学会研究会資料 言語・音声理解と対話処理研究会 第90回 (SIG-SLUD)"
          date="November 2020"
          href="https://www.jstage.jst.go.jp/article/jsaislud/90/0/90_18/_article/-char/ja/"
          prize="若手優秀賞"
        />
        <PublicationItem
          title="深層強化学習を用いた分散協調探索問題における記憶情報による情報補完とその効率化"
          authors="山崎天, 菅原俊治"
          publishedAt="電子情報通信学会技術研究報告; 信学技報 (WSSIT2019)"
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
          title="Dialog Robot Competition 2023 - Grand Prize"
          from="the Dialog Robot Competition Executive Committee"
          date="Dec. 2023"
          href="https://sites.google.com/view/dialogrobotcompe3/results"
        />
        <AwardItem
          title="Dialog System Live Competition 5 - Open Track Grand Prize"
          from="the 13th Dialogue System Symposium (SIG-SLUD)"
          date="Dec. 2022"
          href="https://sites.google.com/view/dslc5/%E7%B5%90%E6%9E%9C"
        />
        <AwardItem
          title="Dialog System Live Competition 5 - Situation Track Grand Prize"
          from="the 13th Dialogue System Symposium (SIG-SLUD)"
          date="Dec. 2022"
          href="https://sites.google.com/view/dslc5/%E7%B5%90%E6%9E%9C"
        />
        <AwardItem
          title="Dialog Robot Competition 2022 - Grand Prize"
          from="the Dialog Robot Competition Executive Committee"
          date="Oct. 2022"
          href="https://sites.google.com/view/drc2022-jp/results"
        />
        <AwardItem
          title="Dialog System Live Competition 4 - Open Track Grand Prize"
          from="the 12th Dialogue System Symposium (SIG-SLUD)"
          date="Nov. 2021"
          href="https://dialog-system-live-competition.github.io/dslc4/result.html"
        />
        <AwardItem
          title="Dialog System Live Competition 4 - Situation Track Grand Prize"
          from="the 12th Dialogue System Symposium (SIG-SLUD)"
          date="Nov. 2021"
          href="https://dialog-system-live-competition.github.io/dslc4/result.html"
        />
        <AwardItem
          title="Young Researcher Award for Excellent Research"
          from="the 11th Dialogue System Symposium (SIG-SLUD)"
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
          type="Talk"
          date="Oct. 2023"
          at="NLPコロキウム"
          title="対話システム開発における日本語大規模言語モデルとの格闘"
        >
          <div class="flex flex-wrap gap-3 md:gap-6 items-center">
            <a
              href="https://nlp-colloquium-jp.github.io/schedule/2023-10-25_takato-yamazaki/"
              class="flex w-fit pb-1"
              target="_blank"
              ><img
                class="h-5 w-fit bg-white rounded-sm px-1 py-0.5"
                src="/img/nlp_colloquium_logo.png"
            /></a>
            <a
              href="https://youtu.be/uUvuYnqgY9M?si=sgI2udfzlqk4arNO"
              class="flex w-fit pb-1"
              target="_blank"
              ><img class="h-4 w-fit" src="/img/yt_logo.png"
            /></a>
          </div>
        </ActivityItem>
        <ActivityItem
          type="Talk"
          date="Sep. 2023"
          at="FastLabel × LayerX × LINE 3社が語る「生成AI×プロダクト開発」で直面する課題と乗り越え方"
          title="どこまでLLMに任せる？LLMの自由度と制御性のバランスを取るための技術紹介"
        >
          <div class="flex flex-wrap gap-3 md:gap-6 items-center">
            <a
              href="https://logmi.jp/tech/articles/329761"
              class="flex w-fit pb-1"
              target="_blank"
              ><img class="h-4 w-fit" src="/img/logmi_logo.svg"
            /></a>
            <a
              href="https://youtu.be/9B7_PPYFQE0?si=6ULNkt1Y0XtgZNPc"
              class="flex w-fit pb-1"
              target="_blank"
              ><img class="h-4 w-fit" src="/img/yt_logo.png"
            /></a>
          </div>
        </ActivityItem>
        <ActivityItem
          type="Talk"
          date="Jul. 2023"
          at="LINEヤフー 新卒採用ページ"
          title="新卒採用ページ 社員インタビュー"
        >
          <div class="flex flex-wrap gap-3 md:gap-6 items-center">
            <a
              href="https://www.lycorp.co.jp/ja/recruit/interview/678/"
              class="flex w-fit pb-1"
              target="_blank"
              ><img class="h-3 w-fit" src="/img/ly_logo.svg"
            /></a>
          </div>
        </ActivityItem>
        <ActivityItem
          type="Talk"
          date="Nov. 2022"
          at="Tech-Verse 2022"
          title="日本語の基盤モデルを搭載したHyperCLOVAの大規模化と応用可能性"
        >
          <div class="flex flex-wrap gap-3 md:gap-6 items-center">
            <a
              href="https://tech-verse.me/ja/sessions/52"
              class="flex w-fit pb-1"
              target="_blank"
              ><img class="h-5 w-fit" src="/img/tech-verse_logo.svg"
            /></a>
            <a
              href="https://engineering.linecorp.com/ja/interview/tech-verse-2022-scaling-and-potential-uses-for-the-hyperclova-japanese-base-model"
              class="flex w-fit pb-1"
              target="_blank"
              ><img class="h-3 w-fit" src="/img/line_dev_logo.svg"
            /></a>
            <a
              href="https://youtu.be/I4o7X3-aqJk?si=xbX4rbLhUwN5LpiG"
              class="flex w-fit pb-1"
              target="_blank"
              ><img class="h-4 w-fit" src="/img/yt_logo.png"
            /></a>
          </div>
        </ActivityItem>
      </div>
    </div>
    <div class="mt-16">
      <h2
        class="py-3 md:py-4 bg-neutral-800/60 backdrop-blur-sm top-0 sticky font-bold text-xl text-white md:text-2xl"
      >
        <span class="text-orange-300">##</span> Skills & Lanaguges
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <SkillItem title="Japanese">Native</SkillItem>
        <SkillItem title="English">Fluent, TOEIC: 990</SkillItem>
        <SkillItem title="Python"
          >Server-side development, Machine Learning (e.g. PyTorch)</SkillItem
        >
        <SkillItem title="JavaScript / TypeScript"
          >Web development (e.g. Vue, React), Module development, 3D</SkillItem
        >
        <SkillItem title="HTML/CSS">Front-end development, Design</SkillItem>
        <SkillItem title="Java">Web development, Module development</SkillItem>
        <SkillItem title="PHP">Web development</SkillItem>
        <SkillItem title="C/C++"
          >Module development, Competitive Programming</SkillItem
        >
        <SkillItem title="LLM Application"
          >I have many experiences with LLMs and Prompt Engineering!</SkillItem
        >
      </div>
    </div>
    <div class="mt-16 w-full text-center text-neutral-400 text-sm">
      Updated on 2024/1/26
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
