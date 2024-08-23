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
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

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

```js
const proudOfThisFunc = () => {
  console.log("🎉");
};
```

### Continued development

Techniques that I will need to refine my knowledge and skills is being able to accommodate website assets to fit near accurately to a device's viewport, being able to create responsive texts that adjust based on the device that the website is being displayed on, as well as being able to familiarize myself with more css rules to be able apply more advanced solutions to upskill the aesthetics of a website.

### Useful resources

- [Responsive navbar](https://www.youtube.com/watch?v=HbBMp6yUXO0) - This tutorial thoroughly explained how to make a resposive navbar, the lesson I took from this was being able to create a mobile menu that would be responsive with any mobile device viewport.

- [Dropdown menu](https://www.youtube.com/watch?v=S-VeYcOCFZw) - This tutorial explained how to create a dropdown menu. The video shows the basics towards making one, and due to the expected design of this challenge's dropdown, modifications to be aligned with the styling requirements had to be made.

## Author

- Frontend Mentor - [@LorryAfriyie](https://www.frontendmentor.io/profile/LorryAfriyie)
