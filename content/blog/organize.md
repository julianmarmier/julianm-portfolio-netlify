---
title: Organize
tag: Application Development
date: 2022-09-19T11:47:50.897Z
description: An application that actually helps you sort your files.
thumbnail: /img/organize-thumbnail.png
archived: false
images:
  - image: /img/screenshot.png
    alt: Screenshot of the app's main screen.
---
A﻿ few years ago to practice developing apps on the Electron platform, I decided to create an app to sort files after having seen a similar one online. Since I wasn't incredibly experienced with JS frameworks, I went for vanilla JavaScript, which was a terrible mistake—not only did it bring out the laziest parts of my coding self, but it also didn't feature any type checking, leading to more than one multi-hour debug session to realize some undefined object property was incorrectly returned.

F﻿ast-forward to 2022, where I've decided to fix my past mistakes by… starting over! Meet [Organize](https://organize.julianmarmier.com), the file manager that'll actually help you sort your files. Built on Tauri and Svelte, the app takes up a mere few megabytes of disk space, a significant improvement contrasted with Electron's few hundreds.

Try it out on the project's [releases page](https://github.com/julianmarmier/organize/releases/latest)!