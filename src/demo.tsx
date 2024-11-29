import React from 'react';
import ReactDOM from 'react-dom/client';
import BlueskyCard from './main';

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <BlueskyCard
      style={{ width: '100%', maxWidth: '500px', margin: '100px auto' }}
      author={{
        name: 'matt klinman',
        username: 'mattklinman.bsky.social',
        image:
          'https://zorapeteri.github.io/react-bluesky-card/img/mattklinman.jpg',
      }}
      text="wednesday night, time to sterilize my toilet paper for the rest of the week"
      images={[
        {
          src: 'https://zorapeteri.github.io/react-bluesky-card/img/toiletpaper.jpg',
        },
        {
          src: 'https://zorapeteri.github.io/react-bluesky-card/img/toiletpaper.jpg',
        },
        {
          src: 'https://zorapeteri.github.io/react-bluesky-card/img/toiletpaper.jpg',
        },
      ]}
      time={new Date('2024-11-28T01:35:00Z')}
      engagement={{
        likes: 4,
        reposts: 0,
        replies: 0,
      }}
      permalink="https://bsky.app/profile/mattklinman.bsky.social/post/3lbxwfvkk4k2q"
    />
  </React.StrictMode>
);
