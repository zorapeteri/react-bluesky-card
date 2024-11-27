# react-bluesky-card

[![NPM](https://img.shields.io/npm/v/react-bluesky-card.svg)](https://www.npmjs.com/package/react-bluesky-card)

A Bluesky Card component you can use easily in your React projects. It doesn't rely on the Bluesky API but instead lets you feed in all information about the post you're displaying. This way you can create cards for fictional post or post that have been deleted.

[:butterfly: Demo and documentation](https://zorapeteri.github.io/react-bluesky-card)

<img src="https://github.com/user-attachments/assets/2f28ef03-d31f-48d7-aad0-40cb4c4315d7" width="500">
<br>
<br>
<img src="https://github.com/user-attachments/assets/c2b1343e-3439-42ab-8ae0-e80ddb35cb0b" width="500">

---

## Installation

```bash
npm i react-bluesky-card
# or
yarn add react-bluesky-card
```

## Features

- [x] Responsive component
- [x] Component scales to fit inside any container
- [x] Light, dim and dark themes
- [x] Dark mode preference support
- [x] Gradient and blurred container styles
- [x] styled-components and emotion support
- [x] TypeScript support
- [x] Support for images in post
- [x] Support for @mentions in post
- [x] Support for links in post
- [x] Support for hashtags in post
- [x] Display number of replies, reposts and likes

## Server-side rendering

`react-bluesky-card` can only be rendered on the client side as it loads its CSS directly into the DOM.
To make it work with SSR, try importing the package dynamically.