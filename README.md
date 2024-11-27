# react-bluesky-card

[![NPM](https://img.shields.io/npm/v/react-bluesky-card.svg)](https://www.npmjs.com/package/react-bluesky-card)

A Bluesky Card component you can use easily in your React projects. It doesn't rely on the Bluesky API but instead lets you feed in all information about the posts you're displaying. This way you can create cards for fictional Bluesky posts, or ones that have been deleted.

<img src="https://github.com/user-attachments/assets/ca3c7f5f-6a1d-4208-818e-92e176d33d80" width="500">
<br>
<br>
<img src="https://github.com/user-attachments/assets/9601f52b-0980-4834-a743-8a223e81e274" width="400">

[:butterfly: Demo and documentation](https://zorapeteri.github.io/react-bluesky-card)

---

## Installation

```bash
npm i react-bluesky-card
# or
yarn add react-bluesky-card
```

## Features

- [x] Responsive component
- [x] Light, dim and dark themes
- [x] Dark mode preference support
- [x] Gradient and blurred container styles
- [x] styled-components and emotion support
- [x] TypeScript support
- [x] Support for images in posts
- [x] Support for @mentions in posts
- [x] Support for links in posts
- [x] Support for hashtags in posts
- [x] Display number of replies, reposts and likes

## Server-side rendering

`react-bluesky-card` can only be rendered on the client side as it loads its CSS directly into the DOM.
To make it work with SSR, try importing the package dynamically.
