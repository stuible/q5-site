---
title: "Black Stories: Vancouver"
type: Oral History Archive
when: 2026
# link: https://blackstories.ca/
hero: hero.jpg
description: Learn about how Q5 built a digital archive for the oral histories of Black Vancouverites
summary: Q5 built a digital archive for the oral histories of Black Vancouverites
tags:
    - Web Design
    - Web Development
featured:
    show: false
    image: hero.jpg
order: 1
---
## Background
Dr. Annette Henry is a Professor at the University of British Columbia in the Department of Language and Literacy Education and the Institute for Race, Gender, Sexuality and Social Justice. For years she has been recording and transcribing interviews with Black Vancouverites whose work has shaped the region's social and cultural life, gathering photos, newspaper clippings and other artifacts along the way. This SSHRC-funded research project was known as the Black Oral History Digital Archive.

## Objectives
Annette wanted a public home for this material: a website where anyone could read these stories, hear them in the participants' own voices, and browse the artifacts, without needing an account.

**1.** Present each person's life as a compelling story, not a Wikipedia article: quick to understand, with the option to go deeper

**2.** Put the audio recordings at the centre of the experience

**3.** Create a searchable archive for artifacts that don't belong to any one story

**4.** Let Annette and her team add and edit all of the content themselves, long after launch

## Process

### 1. Discovery & Platform
We started by reviewing the digital heritage projects Annette admired, such as the [Reciprocal Research Network](https://www.rrncommunity.org/), [Digital Sq'éwlets](https://digitalsqewlets.ca/) and the [Vancouver Holocaust Education Centre](https://www.vhec.org/), along with the tools her UBC colleagues had suggested, including Omeka, Mukurtu, WordPress and CollectionBuilder. Annette had already tried Omeka and found it hard to work with. Since the stories, not the database, were the heart of the project, we proposed a **custom website** built on a **headless CMS**. We also worked out a phased plan: get a smaller MVP online first, then add features as new content arrived.

### 2. Naming & Design
The project needed a name that would work for a public audience. Annette settled on **Black Stories: Vancouver**, and the domain *blackstories.ca*.

Our early conversations shaped the design direction: the site should feel modern and minimal but alive, never too academic, and should read as history rather than as a collection of interviews. We produced a moodboard, sitemap, wireframes and mockups, and Annette and her long-time collaborator Carolyn reviewed each round. Their feedback shaped many of the details, from the language used to describe the participants to how Vancouver's Black history is introduced on the home page.

<nuxt-picture src="/work/black-stories-vancouver/story-hero.jpg" alt="The top of Leon Bibb's story page, showing his portrait, a pull quote and where he was born and moved to"></nuxt-picture>
*Each story opens with a portrait, a pull quote, and where that person came from*

### 3. Story Pages
Each story opens with a large portrait, a pull quote, and where the person was born and when they arrived in Vancouver. A short version of their story and a brief timeline come first, so readers can get the gist in a minute. From there, the full story is divided into chapters such as Early Life, Career and Activism. A scrollspy in the sidebar shows readers where they are and lets them jump to any chapter. As the reader scrolls, photos with captions follow along beside the text. Annette called these captioned photos "a mini-story within a story".

<nuxt-picture src="/work/black-stories-vancouver/story-scrollspy.jpg" alt="The Early Life chapter of Leon Bibb's story, with the scrollspy on the left and an archival photo on the right"></nuxt-picture>

### 4. Audio
Every quote in the stories comes from a recorded interview, and many of those recordings are hours long. Annette chose clips from each interview, and we placed them inline with the chapters they belong to. When a reader starts a clip, a player stays fixed at the bottom of the screen, so they can keep reading and scrolling while it plays.

<nuxt-picture src="/work/black-stories-vancouver/audio-player.jpg" alt="A story chapter with captioned photos and the audio player fixed to the bottom of the screen"></nuxt-picture>
*Clips keep playing as you read on*

### 5. Artifacts Archive
Many of the photos, newspaper clippings and pamphlets Annette had collected don't belong to any single story. We built an Artifacts section where these can be searched, filtered by type, and sorted with the newest additions first. Multi-page PDFs, such as programs and booklets, are split into individual pages automatically. Artifacts can also be tagged with the people they relate to, so every story links to its own artifacts.

<nuxt-picture src="/work/black-stories-vancouver/artifacts.jpg" alt="The artifacts page, with a search bar, filters for photo, audio and newspaper, and a grid of archival photos and clippings"></nuxt-picture>

### 6. Implementation & Training
The site is built with Nuxt and Strapi. The content editor was set up so that the people who know these stories best can maintain them, with no developer needed. We walked Annette through the CMS, wrote an editing guide, and put together a simple workflow for scanning and exporting archival material at the right quality. Soon Annette, Carolyn and Annette's students were adding stories, captions and artifacts themselves. The site runs in Docker containers with automated backups, and we worked with UBC IT to bring it onto their EduCloud hosting service.

## Results
Black Stories: Vancouver launches with the stories of seven people, two more than the original scope. Its archive holds more than 60 artifacts, and Annette and her team keep adding more. Most of all, the project gives these stories, many of which had never been told publicly, a permanent home where anyone can find them.
