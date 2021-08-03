---
title: Scribjab
type: Education
hero: hero.jpg
link: https://www.scribjab.com/
when: Spring 2021
tags:
    - Web Development
featured:
    show: true
    image: hero.jpg
order: 3
---
## Background
ScribJab is a website and iPad app created by two Simon Fraser University professors for language learners to read and create digital stories in multiple languages. It provides a space for children to draw, write and record these stories in two languages simultaneously, coming to an enhanced appreciation of their own multilingual skills.

## Objectives
The web version of ScribJab used Adobe Flashplayer to implement the audio recording functionality.  With Flash support ending in December of 2020, this feature was no longer working for ScribJab's web users.  Q5 was asked to find a supported alternative to the flash audio recorder.

## Process
The first step was to familiarize ourselves with the technology stack of the existing web application.  During discovery, we learned that the the website was built on top of JBoss, a Java web framework.  From there we replicated the the Flash functionality using native Web Audio APIs and integrated these changes into the existing codebase.

## Results
After testing, we were ready to deploy our patched version of ScribJab and users were once able to record their stories through the website.

<br>

[Lean more about ScribJab](https://www.scribjab.com/en/about/about.html)