// Everything visible on the page lives here; the components in
// src/components/ only lay it out.
//
// Fields that need an inline link, bold or italics (bio, news, desc, authors,
// venue) are HTML snippets, rendered with Astro's `set:html`.
//
// ── Where to put your files ───────────────────────────────────────────────
//   CV / Resume PDFs ...... public/pdf/CV.pdf and public/pdf/Resume_Weilu.pdf
//   Paper PDFs ............ public/papers/<anything>.pdf
//                           then add { label: "PDF", href: "papers/<file>.pdf" }
//                           to that publication's `links`
//   Project images ........ src/assets/projects/<project id>.png (or .jpg/.webp)
//   Publication images .... src/assets/publications/<publication id>.png
//   Leadership photos ..... src/assets/more/leadership/   (any file names)
//   Fishing photos ........ src/assets/more/fishing/      (any file names)
//   Portrait .............. src/assets/photo.jpg
// Images are matched by name, so a missing file just means no image is shown.
// Photos in "More About Me" appear in file-name order.

import photo from "./assets/photo.jpg";

const images = import.meta.glob("./assets/**/*.{jpg,jpeg,png,webp,avif,gif}", {
  eager: true,
  import: "default",
});

// `src/assets/<dir>/<id>.<ext>`, whichever extension the file has.
const imageFor = (dir, id) => {
  const key = Object.keys(images).find((k) =>
    new RegExp(`^\\./assets/${dir}/${id}\\.[a-z]+$`, "i").test(k),
  );
  return key ? images[key] : undefined;
};

// Every image inside `src/assets/<dir>/`, sorted by file name.
const folderImages = (dir) =>
  Object.keys(images)
    .filter((k) => k.startsWith(`./assets/${dir}/`))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((k) => images[k]);

// Paths below are relative to the site root (public/); the components add the
// site's base path. Update the file in public/pdf/ and these stay valid.
export const CV_URL = "pdf/CV.pdf";
export const RESUME_URL = "pdf/Resume_Weilu.pdf";

export const profile = {
  nameEn: "Wei-Lu Wang",
  role: "PhD Candidate · HCI Researcher",
  photo,
  email: "weilu@vt.edu",
  scholar: "https://scholar.google.com/citations?user=rYbllTUAAAAJ&hl=en",
  github: "https://github.com/WeiluWang",
  cv: CV_URL,
  resume: RESUME_URL,
};

// Order here is the order in the sidebar and on the page.
export const sections = [
  { id: "bio", label: "Bio" },
  { id: "news", label: "News" },
  { id: "projects", label: "Projects" },
  { id: "publications", label: "Publications" },
  { id: "skills", label: "Skills" },
  { id: "teaching", label: "Teaching Experience" },
  { id: "more", label: "More About Me" },
];

export const bio = [
  `Hi! My name is Wei-Lu Wang!`,
  `I am a PhD Candidate in Computer Science at Virginia Tech, specializing in
   <strong>Human-Computer Interaction (HCI)</strong> and
   <strong>Computer-Supported Cooperative Work (CSCW)</strong>. My advisor is
   <a href="https://people.cs.vt.edu/mccricks/"><strong>Dr. Scott McCrickard</strong></a>!
   My research is driven by a deep commitment to human connection, focusing on
   designing, prototyping, and evaluating interactive systems that foster
   psychological relatedness and collaborative experiences. My doctoral work
   centers on <strong>Relatedness Technologies, Design Research, Outdoor, and
   Human-AI interaction</strong>, aiming to bridge the emotional and
   psychological gaps in long-distance social interaction by exploring how
   mechanism design can transcend physical boundaries to strengthen
   interpersonal bonds. Methodologically, I ground my work in
   <strong>Qualitative Research</strong> (diary study) while employing
   <strong>Mixed Methods</strong> to drive system iterations through deep user
   insights.`,
  `Beyond academia, I bring a multifaceted professional background as a
   <strong>Research Assistant</strong>, <strong>Product Manager</strong>, and
   <strong>Frontend Engineer</strong> before my PhD. This diverse experience
   allows me to approach HCI challenges through the dual lenses of technical
   implementation and strategic project management. I am also a passionate
   builder who enjoys tackling various side projects and exploring emerging
   technologies in my spare time. Outside of the rigorous demands of research
   and development, I am an avid fisherman who finds balance and inspiration
   in the water’s patience and tranquility.`,
];

// Newest first. `date` is shown in square brackets before the text.
export const news = [
  {
    date: "10/14/2026",
    text: `Presented at CSCW 2026.
           <a href="https://doi.org/10.1145/3816961">Kinspire: Exploring Game-Mediated Prompts to Foster Communication in Distant Families.</a>`,
  },
  {
    date: "08/17/2026",
    text: `Presented at FutureHCI 2026.
           <strong>Folded Presence: An Origami-Inspired Pneumatic Wearable for Ambient Emotional Support Across Distance</strong>
           by Ke Zhong, Lei Xia, Jixiang Fan, Wei-Lu Wang, and Scott McCrickard.`,
  },
  {
    date: "04/2026",
    text: `Hosting an opening talk in the CHCI seminar on 04/24/2026.`,
  },
  {
    date: "12/2025",
    text: `Congrats!!! <a href="#teaching">The undergraduate capstone project I mentored won first place in VTURCS!!!</a>`,
  },
  {
    date: "11/2025",
    text: `Present at OzCHI 2025.
           <a href="https://dl.acm.org/doi/10.1145/3764687.3769926">PlateMate: Structured Guidance Design in Relatedness Technology for Remote Joint Activity.</a>`,
  },
  {
    date: "10/2025",
    text: `Present at CSCW 2025 in Bergen.
           <a href="https://dl.acm.org/doi/10.1145/3757708">Writing Home From Afar: Connecting Distant Families through Sharing of Outdoor Experiences with Digital Diaries.</a>`,
  },
];

// `id` picks the image: src/assets/projects/<id>.png (optional).
// `title` becomes a link when `url` is set. `links` are outlined buttons; a
// link that does not start with http(s) is treated as a file in public/.
export const projects = [
  {
    id: "platemate",
    title:
      "PlateMate: Structured Guidance Design in Relatedness Technology for Remote Joint Activity",
    url: "https://dl.acm.org/doi/10.1145/3764687.3769926",
    role: "Lead Researcher",
    date: "07/2025 – current",
    desc: `Remote partners often rely on one person, the "kinkeeper", to start
           every shared activity, which makes joint activities hard to sustain.
           PlateMate explores how structured guidance, delivered through a
           weekly cooking activity and prompts from a shared virtual pet, can
           reduce that burden and keep both partners participating. A two-week
           study with 14 participants (7 pairs) examined how this guidance
           shapes remote joint activity.`,
    links: [
      {
        label: "Paper (OzCHI 2025)",
        href: "https://dl.acm.org/doi/10.1145/3764687.3769926",
      },
    ],
  },
  {
    id: "mission-realm",
    title:
      "Playing Apart with Mission Realms: Exploring Shared Leisure Across Distance Through Location-Based Play",
    url: "https://doi.org/10.1145/3831667",
    role: "Researcher",
    date: "08/2025 – 02/2026",
    desc: `Shared leisure is hard to sustain when people live apart, and most
           remote play leaves one person on a screen. Mission Realms is an
           asymmetric location-based game in which an outdoor player explores
           a campus while a remote player joins over video, and both solve
           narrative missions together. A two-phase qualitative study with 21
           participants examined how this setup shapes connection to a partner
           and to place, and yielded a typology of mission-design dimensions
           and five forms of player agency.`,
    links: [
      { label: "Paper (CHI PLAY 2026)", href: "https://doi.org/10.1145/3831667" },
    ],
  },
  {
    id: "folded-presence",
    title:
      "Folded Presence: An Origami-Inspired Pneumatic Wearable for Ambient Emotional Support Across Distance",
    role: "Co-author",
    date: "01/2026 - 06/2026",
    desc: `Video calls and messages carry voice and image but little of the
           comfort of physical touch, which is linked to lower anxiety and
           depression. Folded Presence captures a remote partner's hand
           gesture with forearm EMG and renders it as soft pressure through
           origami-inspired inflatable air bladders. The work explores five
           folded geometries and a bench prototype to ask how soft, ambient
           touch could support emotional presence across distance.`,
    links: [{ label: "Accepted" }],
  },
  {
    id: "ips-ai-chatbot",
    title: "IPS AI Chatbot",
    role: "Product Manager",
    date: "11/2025 – 02/2026",
    desc: `The <strong>IPS AI Chatbot</strong> is a production-level
           conversational agent designed to streamline user inquiry handling
           through a hybrid AI architecture. The system integrates
           <strong>Rasa</strong> for robust intent recognition and dialogue
           management with the <strong>OpenAI</strong> API for generating
           sophisticated, context-aware responses. This implementation ensures
           high precision in identifying user needs while maintaining the
           flexibility of natural language communication. By orchestrating the
           hand-off between structured NLU and large language models, the
           chatbot provides an automated, scalable solution for delivering
           real-time support and technical guidance to users in a professional
           service environment.`,
  },
  {
    id: "kinspire",
    title: "Kinspire",
    role: "Lead Researcher",
    date: "12/2024 – 07/2026",
    url: "https://doi.org/10.1145/3816961",
    desc: `Distant parents and adult children often struggle to start
           meaningful conversations, and the right support depends on how a
           family usually communicates. Kinspire is a card-drawing game whose
           prompts use relationship-maintenance strategies such as positivity,
           openness, and joint activity. A three-week diary study with 34
           participants from 14 families explored how game-mediated prompts
           support communication across different family communication
           patterns.`,
    links: [
      { label: "Paper (CSCW 2026)", href: "https://doi.org/10.1145/3816961" },
    ],
  },
  {
    id: "tubewhale",
    title: "TubeWhale (side project)",
    role: "Product Manager",
    date: "08/2024 – 10/2024",
    desc: `This research introduces TubeWhale, an agentic and modular
           framework designed to support researchers during the
           high-uncertainty phase of early-stage video corpus construction. By
           organizing keyword expansion, retrieval, and summarization into
           inspectable AI workflows, the system functions as an intermediary
           tool for exploration and reflection rather than an automated
           substitute for human judgment.`,
    links: [
      { label: "GitHub", href: "https://github.com/yaninsanity/TubeWhale" },
    ],
  },
  {
    id: "writing-home-from-afar",
    title:
      "Writing Home From Afar: Connecting Distant Families through Sharing of Outdoor Experiences",
    url: "https://dl.acm.org/doi/10.1145/3757708",
    role: "Lead Researcher",
    date: "08/2024 – 11/2024",
    desc: `Messaging with distant family members often stays at the surface
           level and rarely conveys what daily life is like. This research
           asks how sharing outdoor experiences through digital diaries, using
           the DailyBean app, can help distant families feel emotionally
           connected. A three-week study with 22 participants identified the
           mechanisms behind these conversations and design recommendations
           for future technologies.`,
    links: [
      {
        label: "Paper (CSCW 2025)",
        href: "https://dl.acm.org/doi/10.1145/3757708",
      },
    ],
  },
  {
    id: "chatterbox-opener",
    title:
      "Chatterbox Opener: A Game to Support Healthy Communication and Relationships",
    url: "https://dl.acm.org/doi/10.1145/3573382.3616074",
    role: "Lead Researcher",
    date: "01/2023 – 06/2023",
    desc: `Family members and couples who live apart often find it hard to
           start a meaningful conversation. Chatterbox Opener is a prompt-card
           game that tests three ways of sharing experiences (memory sharing,
           joint activity, and empathic communication) to see which works for
           different communication patterns. A two-week diary study examined
           how these prompts support healthy communication and relationships.`,
    links: [
      {
        label: "Paper (CHI PLAY 2023)",
        href: "https://dl.acm.org/doi/10.1145/3573382.3616074",
      },
    ],
  },
  {
    id: "diary-study",
    title:
      "Diary Study as an Educational Tool: An Experience Report from an HCI Course",
    url: "https://doi.org/10.1145/3641554.3701845",
    role: "Co-author",
    date: "SIGCSE TS 2025",
    desc: `Computer science students often find it hard to understand real user
           needs and how technology affects people's daily lives. This work
           proposes a four-phase framework (Plan, Collect, Analyze, Reflect)
           for using diary studies in introductory HCI courses. A case study
           with 73 students examined how the method supports learning.`,
    links: [
      {
        label: "Paper (SIGCSE TS 2025)",
        href: "https://doi.org/10.1145/3641554.3701845",
      },
    ],
  },
  {
    id: "fit-to-draw",
    title: "Fit to Draw: An Elevation of Location-Based Exergames",
    url: "https://doi.org/10.1145/3573382.3616060",
    role: "Co-author",
    date: "01/2023 – 06/2023",
    desc: `Many people find exercise boring and spend little time outdoors with
           others. Fit to Draw is a multiplayer, Pictionary-style exergame in
           which players walk outdoors so their GPS trace draws a word while
           companions guess it. It aims to motivate physical activity, time
           outdoors, socializing, and creativity.`,
    links: [
      {
        label: "Paper (CHI PLAY 2023)",
        href: "https://doi.org/10.1145/3573382.3616060",
      },
    ],
  },
].map((p) => ({ ...p, image: imageFor("projects", p.id) }));

// `id` picks the image: src/assets/publications/<id>.png (optional).
// `links` is a row of buttons; add { label: "PDF", href: "papers/<file>.pdf" }
// once a PDF is in public/papers/. External links open in a new tab.
const WANG = "<strong>Wang, W. L.</strong>";
// Everything else is listed under "Conference Full Papers" (as in the CV).
const SHORT_PAPERS = new Set([
  "ozchi-2025",
  "chi-play-2023-chatterbox",
  "chi-2025-peridot",
  "chi-2025-hiker-wildlife",
  "vlhcc-2024-sql",
  "chi-play-2023-fit-to-draw",
]);
export const publications = [
  {
    id: "cscw-2026",
    tag: "CSCW",
    authors: `${WANG}, Yan, Z., Fan, J., Hassan, T., Zheng, X., Haqq, D., … &amp; McCrickard, D. S. (2026).`,
    title: "Kinspire: Exploring Game-Mediated Prompts to Foster Communication in Distant Families.",
    venue:
      "<em>Proceedings of the ACM on Human-Computer Interaction</em>. (Full Paper, forthcoming).",
  },
  {
    id: "chi-play-2026-mission-realms",
    tag: "CHI PLAY",
    authors: `Haqq, D., ${WANG}, Yan, Z., Zheng, X., Saaty, M., &amp; McCrickard, D. S. (2026).`,
    title:
      "Playing Apart with Mission Realms: Exploring Shared Leisure Across Distance Through Location-Based Play.",
    venue:
      "<em>Proceedings of the ACM on Human-Computer Interaction</em>. (Full Paper, forthcoming).",
  },
  {
    id: "futurehci-2026",
    tag: "FutureHCI",
    authors: `Zhong, K., Xia, L., Fan, J., ${WANG}, &amp; McCrickard, D. S. (2026).`,
    title:
      "Folded Presence: An Origami-Inspired Pneumatic Wearable for Ambient Emotional Support Across Distance.",
    venue: "<em>Future of HCI Workshop (FutureHCI)</em>. (Full Paper, forthcoming).",
  },
  {
    id: "educhi-2026",
    tag: "EduCHI",
    authors: `Fan, J., ${WANG}, Xia, L., Chen, Y., Liu, S., &amp; McCrickard, D. S. (2026, May).`,
    title: "Between Evaluation and Facilitation: Teaching Assistants’ Challenges in HCI Education.",
    venue: "In <em>Proceedings of the 8th Annual Symposium on HCI Education</em> (pp. 1–6).",
  },
  {
    id: "asee-2026",
    tag: "ASEE",
    authors: `Fan, J., Song, J., ${WANG}, Chen, Y., &amp; McCrickard, D. S. (2026, June).`,
    title: "Cultivating Design Empathy through the PCAR Diary Framework.",
    venue: "In <em>2026 ASEE Annual Conference &amp; Exposition</em>.",
  },
  {
    id: "cscw-2025",
    tag: "CSCW",
    authors: `${WANG}, Andrus, N., Hassan, T., Fan, J., Cao, Y., Asante, J., … &amp; McCrickard, D. S. (2025).`,
    title:
      "Writing Home From Afar: Connecting Distant Families through Sharing of Outdoor Experiences with Digital Diaries.",
    venue: "<em>Proceedings of the ACM on Human-Computer Interaction</em>, 9(7), 1–26.",
  },
  {
    id: "sigcse-ts-2025",
    tag: "SIGCSE TS",
    authors: `Fan, J., Haqq, D., Saaty, M., ${WANG}, &amp; McCrickard, S. (2025).`,
    title: "Diary Study as an Educational Tool: An Experience Report from an HCI Course.",
    venue:
      "<em>Proceedings of the 56th ACM Technical Symposium on Computer Science Education (SIGCSE TS 2025)</em>, V. 1, 311–317. Association for Computing Machinery.",
  },
  {
    id: "educhi-2025",
    tag: "EduCHI",
    authors: `Fan, J., ${WANG}, Andrus, N., Cao, Y., Saaty, M., Ghasemi, S., Xia, L. and McCrickard, S. (2025, July).`,
    title:
      "Enhancing HCI Capstone Courses Through Diary Study Methods: Feedback and Insights from Graduate-Undergraduate Collaboration.",
    venue: "In <em>Proceedings of the 7th Annual Symposium on HCI Education</em> (pp. 1–9).",
  },
  {
    id: "fie-2025-cross-level",
    tag: "IEEE FIE",
    authors: `Fan, J., Cao, Y., ${WANG}, Andrus, N., Saaty, M., Ghasemi, S., Xia, L., Liu, S., &amp; McCrickard, S. (2025).`,
    title: "Enhancing Cross-level Collaboration in HCI Education through Diary Studies.",
    venue: "<em>Frontiers in Education 2025</em>.",
  },
  {
    id: "fie-2024-social-games",
    tag: "IEEE FIE",
    authors: `Haqq, D., Fan, J., Saaty, M., ${WANG}, Andrus, N., &amp; McCrickard, D. S. (2024, October).`,
    title: "Understanding Development of Social Games Through Diary Studies.",
    venue: "<em>Proceedings of the Frontiers in Education 2024</em>, Washington DC, USA.",
  },
  {
    id: "fie-2025-ageism",
    tag: "IEEE FIE",
    authors: `Andrus, N., Smith, A., Tarashiyoun, H., ${WANG}, Williams, I., &amp; McCrickard, S. (2025, November).`,
    title: "Ageism in the Computer Science University Classroom: A Service Learning Case Study.",
    venue: "In <em>2025 IEEE Frontiers in Education Conference (FIE)</em> (pp. 1–8). IEEE.",
  },
  {
    id: "fie-2025-diaryquest",
    tag: "IEEE FIE",
    authors: `Oh, S., Zhao, J., Russo, C., Bolmer, M., Jeong, J., Fan, J., Cao, Y., ${WANG}, Andrus, N., &amp; McCrickard, S. (2025).`,
    title:
      "Optimizing Diary Studies Learning Outcomes with Fine-tuned Large Language Models on the DiaryQuest Platform.",
    venue: "<em>Frontiers in Education 2025</em>.",
  },
  {
    id: "ozchi-2025",
    tag: "OzCHI",
    authors: `${WANG}, Yan, Z., Zheng, X., Zhang, W., Cao, Y., &amp; McCrickard, D. S. (2025, November).`,
    title: "PlateMate: Structured Guidance Design in Relatedness Technology for Remote Joint Activity.",
    venue:
      "In <em>Proceedings of the 37th Australian Conference on Human-Computer Interaction</em> (pp. 755–762).",
  },
  {
    id: "chi-play-2023-chatterbox",
    tag: "CHI PLAY",
    authors: `${WANG}, Haqq, D., Saaty, M., Cao, Y., Fan, J., Patel, J. V., &amp; McCrickard, D. S. (2023, October).`,
    title: "Chatterbox Opener: A Game to Support Healthy Communication and Relationships.",
    venue:
      "In <em>Companion Proceedings of the Annual Symposium on Computer-Human Interaction in Play</em> (pp. 43–48).",
  },
  {
    id: "chi-2025-peridot",
    tag: "CHI",
    authors: `Fan, J., Cao, Y., Saaty, M., ${WANG}, Xia, L., Liu, H., &amp; McCrickard, D. S. (2025, April).`,
    title: "Understanding the Creation of Human-Virtual Entity Bonds through the AR Mobile Game Peridot.",
    venue:
      "In <em>Proceedings of the Extended Abstracts of the CHI Conference on Human Factors in Computing Systems</em> (pp. 1–7).",
  },
  {
    id: "chi-2025-hiker-wildlife",
    tag: "CHI",
    authors: `Cao, Y., Hassan, T., Fan, J., Saaty, M., ${WANG}, Stelter, T. L., &amp; McCrickard, S. (2025, April).`,
    title: "Listening to the Wild: Risk and Preparedness in Hiker-Wildlife Conflicts during Outdoor Recreation.",
    venue:
      "In <em>Proceedings of the Extended Abstracts of the CHI Conference on Human Factors in Computing Systems</em> (pp. 1–8).",
  },
  {
    id: "vlhcc-2024-sql",
    tag: "VL/HCC",
    authors: `Ko, M., Bose, D. B., <strong>Wang, W.</strong>, Seyam, M., &amp; Brown, C. (2024, September).`,
    title: "Understanding the Performance of Large Language Model to Generate SQL Queries.",
    venue:
      "In <em>2024 IEEE Symposium on Visual Languages and Human-Centric Computing (VL/HCC)</em> (pp. 359–361). IEEE.",
  },
  {
    id: "chi-play-2023-fit-to-draw",
    tag: "CHI PLAY",
    authors: `Saxena, R., Gaydos, Z., Saaty, M., Haqq, D., Nair, P., Grutzik, G., ${WANG}, &amp; Patel, J. (2023, October).`,
    title: "Fit to Draw: An Elevation of Location-Based Exergames.",
    venue:
      "In <em>Companion Proceedings of the Annual Symposium on Computer-Human Interaction in Play</em> (pp. 312–317).",
  },
].map((p) => ({
  links: [],
  ...p,
  type: SHORT_PAPERS.has(p.id) ? "short" : "full",
  image: imageFor("publications", p.id),
}));

export const publicationGroups = [
  { title: "Conference Full Papers", type: "full" },
  { title: "Conference Short Papers", type: "short" },
];

export const skills = [
  {
    label: "Programming Languages",
    items: ["HTML", "CSS", "JavaScript", "Python", "C#", "SQL"],
  },
  {
    label: "Frameworks & Tools",
    items: [
      "React",
      "Vue",
      "Node.js",
      "RESTful",
      "MySQL",
      "SQLite",
      "Django",
      "Unity",
      "Docker",
      "Figma",
      "Git",
    ],
  },
];

// Graduate Teaching Assistant positions at Virginia Tech, newest first.
export const teaching = [
  { date: "08/2026 – current", course: "CS3114 Introduction to Database Management Systems" },
  { date: "01/2026 – 05/2026", course: "CS4604 Introduction to Database Management Systems" },
  { date: "08/2025 – 12/2025", course: "CS3714 Mobile Software Design" },
  { date: "01/2025 – 05/2025", course: "CS4104 Data and Algorithm Analysis" },
  { date: "08/2024 – 12/2024", course: "CS4104 Data and Algorithm Analysis" },
  { date: "01/2024 – 05/2024", course: "CS4104 Data and Algorithm Analysis" },
  { date: "08/2023 – 12/2023", course: "CS3724 Introduction to Human-Computer Interaction" },
  { date: "06/2023 – 07/2023", course: "CS2114 Software Design & Data Structures" },
  { date: "01/2023 – 05/2023", course: "CS3754 Introduction to Data Analytics & Visualization" },
  { date: "08/2022 – 12/2022", course: "CS5204 Operating Systems" },
];

// Shown under the teaching list; photos come from src/assets/more/leadership/.
export const mentoring = {
  title: "Mentoring",
  text: [
    `Winning 1st Place in <a href="https://vturcs.cs.vt.edu/"><strong>VTURCS</strong></a> 3 times!!!`,
    `Mentoring undergraduate capstone project.`,
  ],
  images: folderImages("more/leadership"),
};

// `images` come from the folder named after each group (see the top of this
// file); `text` is an HTML snippet.
export const more = [
  {
    title: "Fishing Trips",
    text: [`(Outer Banks in NC, Tampa in FL, Virginia Beach in VA)`],
    images: folderImages("more/fishing"),
  },
];

// Shown in the footer.
export const lastUpdated = "November 2026";
