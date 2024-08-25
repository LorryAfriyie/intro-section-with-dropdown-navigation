# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Below are screenshots of the website in mobile and desktop view showcasing it in both the website's active and non-active states.

Desktop screenshots:

[Desktop screenshot 1](./public/images/screenshots/desktop-preview.jpeg)

[Desktop screenshot 2](./public/images/screenshots/desktop-active-state.jpeg)

Mobile screenshots:

[Mobile screenshot 1](./public/images/screenshots/mobile-preview.jpeg)

[Mobile screenshot 2](./public/images/screenshots/mobile-button-active-state.jpeg)

[Mobile screenshot 3](./public/images/screenshots/mobile-menu-active-state.jpeg)

[Mobile screenshot 4](./public/images/screenshots/mobile-dropdown-menu-active-state.jpeg)

### Links

- Solution URL: [Website solution URL](https://github.com/LorryAfriyie/intro-section-with-dropdown-navigation)
- Live Site URL: [Website live URL](https://lorryafriyie.github.io/intro-section-with-dropdown-navigation/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite.js](https://vitejs.dev/) - Frontend Tooling

### What I learned

Utilising image source set to be able to change an image through the image tag based on the width viewport of a screen.

```html
<img
  srcset="
    images/image-hero-mobile.png   500w,
    images/image-hero-desktop.png 1200w
  "
  src="images/image-hero-mobile.png"
  alt="hero-image"
/>
```

Using the picture tag to be able to load different images based on the size of the device width.

```html
<picture>
  <source media="(min-width: 40em)" srcset="images/image-hero-desktop.png" />
  <source srcset="images/image-hero-mobile.png" />
  <img src="images/image-hero-desktop.png" alt="hero-image" />
</picture>
```

### Continued development

- Techniques that I will need to refine my knowledge and skills is being able to accommodate website assets to fit near accurately to a device's viewport, being able to create responsive texts that adjust based on the device that the website is being displayed on, as well as being able to familiarize myself with more css rules to be able apply more advanced solutions to upskill the aesthetics of a website.

- To be able to make content on a website scale better with better screens.

### Useful resources

- [Responsive navbar](https://www.youtube.com/watch?v=HbBMp6yUXO0) - This tutorial thoroughly explained how to make a resposive navbar, the lesson I took from this was being able to create a mobile menu that would be responsive with any mobile device viewport.

- [Dropdown menu](https://www.youtube.com/watch?v=S-VeYcOCFZw) - This tutorial explained how to create a dropdown menu. The video shows the basics towards making one, and due to the expected design of this challenge's dropdown, modifications to be aligned with the styling requirements had to be made.

## Author

- Frontend Mentor - [@LorryAfriyie](https://www.frontendmentor.io/profile/LorryAfriyie)
