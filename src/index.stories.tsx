import BlueskyCard, { BlueskyCardProps } from '.';

export default {
  title: 'Components/BlueskyCard',
  component: BlueskyCard,
  argTypes: {
    theme: {
      options: ['light', 'dim', 'dark'],
      control: {
        type: 'select',
      },
    },
  },
};

const buildProps = (args: any): BlueskyCardProps => {
  const {
    text,
    images,
    time,
    permalink,
    fitInsideContainer,
    replies,
    likes,
    reposts,
    theme,
    clickableProfileLink,
    showTime,
    gradientBackground,
    blurredBackground,
    name,
    username,
    image,
  } = args;

  return {
    author: {
      name,
      username,
      image,
    },
    text,
    images,
    time,
    permalink,
    fitInsideContainer,
    showTime,
    clickableProfileLink,
    gradientBackground,
    blurredBackground,
    theme,
    ...(replies || likes || reposts
      ? { engagement: { replies, likes, reposts } }
      : {}),
  };
};

const baseArgs = {
  name: 'Hank Green',
  username: 'hankgreen.bsky.social',
  image: require('./assets/hank.jpg'),
  text: "What an achievement vaccines are. What a monument to our love for each other it is to stare straight into the face of something as horrific and unstoppable as smallpox or measles or polio or cervical cancer and say “You know what, it doesn't have to be like this.”\n\nHUMANS!",
  time: new Date('2024-11-15T01:59:00.000Z'),
  fitInsideContainer: true,
  clickableProfileLink: false,
  showTime: true,
  permalink: '',
  likes: 12,
  reposts: 34,
  replies: 56,
  showEngagement: true,
  theme: 'light',
  gradientBackground: false,
  blurredBackground: false,
};

const make = (extraArgs: any) => {
  return {
    args: buildProps({ ...baseArgs, ...extraArgs }),
  };
};

export const Default = make({});

export const Dim = make({ theme: 'dim' });

export const Dark = make({ theme: 'dark' });

export const WithPermalink = make({
  permalink:
    'https://bsky.app/profile/did:plc:kqbyr4gqt6p2l57htlsa4nha/post/3laxbpbwvvk26',
});

export const WithoutTime = make({ showTime: false });

export const WithClickableProfileLink = make({ clickableProfileLink: true });

export const WithoutProfilePicture = make({
  image: undefined,
});

export const WithoutEngagement = make({ showEngagement: false });

export const WithHighlightedText = make({
  text: baseArgs.text + ' @username.bsky.social #hashtag https://link.com',
});

export const WithSingleImage = make({
  images: [
    {
      src: 'https://images.unsplash.com/photo-1670884305917-910eb2704c59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    },
  ],
});

export const WithMultipleImages = make({
  images: [
    {
      src: 'https://images.unsplash.com/photo-1670884305917-910eb2704c59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      src: 'https://images.unsplash.com/photo-1669303812553-c4b34cb21ff5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDI0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      src: 'https://images.unsplash.com/photo-1604276920302-0bb781ed727c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDE4MHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    },
  ],
});

export const WithBigEngagement = make({
  replies: 12000,
  reposts: 3400000,
  likes: 56000000,
});

export const WithGradientBackground = make({ gradientBackground: true });

export const WithBlurredBackground = make({ blurredBackground: true });
