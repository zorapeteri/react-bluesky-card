import React from 'react';

import BrowserOnly from '@docusaurus/BrowserOnly';

const zucchiniPost = {
  author: {
    name: 'lauren',
    username: 'lauren.rotatingsandwiches.com',
    image: 'img/lauren.jpg',
  },
  text: "i wouldn't go so far as to say it's underrated, but i don't think zucchini is adequately appreciated. it's an 8 and we treat it like a 6",
  permalink:
    'https://bsky.app/profile/lauren.rotatingsandwiches.com/post/3lbsxjx3vis2x',
  engagement: {
    likes: 696,
    replies: 68,
    reposts: 40,
  },
  time: new Date('2024-11-26T02:12:00Z'),
};

const BlueskyCard = (props) => {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        const BlueskyCard = require('react-bluesky-card');
        require('react-bluesky-card/style.css');
        return (
          <span>
            <BlueskyCard
              {...props}
              style={{ width: '100%', ...(props.style ?? {}) }}
            ></BlueskyCard>
          </span>
        );
      }}
    </BrowserOnly>
  );
};

// Add react-live imports you need here
const ReactLiveScope: unknown = {
  React,
  zucchiniPost,
  BlueskyCard,
  ...React,
};

export default ReactLiveScope;
