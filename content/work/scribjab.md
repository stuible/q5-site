---
title: Scribjab
type: Education
hero: hero.jpg
link: https://www.scribjab.com/
when: Spring 2021
seo: Learn about how Q5 replaced a broken Adobe Flash audio recorder with a one that uses native and modern web standards
summary: Learn about how Q5 replaced a broken Adobe Flash audio recorder with a one that uses native and modern web standards
tags:
    - Web Development
featured:
    show: true
    image: hero.jpg
order: 3
---
## Background
ScribJab is a website and iPad app created by two Simon Fraser University professors for language learners to read and create digital stories in multiple languages. It provides a space for children to draw, write and record stories in two languages simultaneously, coming to an enhanced appreciation of their own multilingual skills.

## Objectives
The web version of ScribJab used Adobe Flashplayer to implement the audio recording functionality.  With Flash support ending in December of 2020, this feature was no longer available for ScribJab's web users.  Q5 was asked to find a supported alternative to the flash audio recorder.

## Process
We first familiarized ourselves with the technology stack of the existing web application.  During this discovery phase, we learned that the the website was using JBoss, a Java-based web framework.  From there we replicated the Flash functionality using native Web Audio APIs and integrated these changes into the JBoss codebase.  We also advised the transition of ScribJab to an SSL-only webserver configuration to ensure that modern browsers such as Chrome would allow the site to request microphone access.

## Results
After testing, we were ready to deploy our modernized version of ScribJab and users were once able to record their stories through the website.  It was great to once again hear everyone's creative stories read in their own bilingual voices!

<br>

[Lean more about ScribJab](https://www.scribjab.com/en/about/about.html)