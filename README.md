# react-bluesky-card

[![NPM](https://img.shields.io/npm/v/react-bluesky-card.svg)](https://www.npmjs.com/package/react-bluesky-card)

A Bluesky Card component you can use easily in your React projects. It doesn't rely on the Bluesky API but instead lets you feed in all information about the posts you're displaying. This way you can create cards for fictional Bluesky posts, or ones that have been deleted.

<img src="https://github.com/user-attachments/assets/2f28ef03-d31f-48d7-aad0-40cb4c4315d7" width="500">
<br>
<br>
<img src="https://github.com/user-attachments/assets/c2b1343e-3439-42ab-8ae0-e80ddb35cb0b" width="500">

[:butterfly: Demo and documentation](https://zorapeteri.github.io/react-bluesky-card)

---

## Installation

```bash
npm i react-bluesky-card
# or
yarn add react-bluesky-card
```

## Features

- Responsive component
- Light, dim and dark themes
- Dark mode preference support
- Gradient and blurred container styles
- styled-components and emotion support
- TypeScript support
- Support for images in posts
- Support for @mentions in posts
- Support for links in posts
- Support for hashtags in posts
- Display number of replies, reposts and likes

## Server-side rendering

`react-bluesky-card` can only be rendered on the client side as it loads its CSS directly into the DOM.
To make it work with SSR, try importing the package dynamically.
