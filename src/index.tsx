import React from 'react';
import UserDetails from 'components/UserDetails';
import Time from 'components/Time';
import Text from 'components/Text';
import Container from 'components/Container';
import Engagement from 'components/Engagement';
import './index.css';
import Images from 'components/Images';
import { ThemeOption, BlueskyCardColors } from './themes';
import BlueskyLogo from 'components/BlueskyLogo';

export type BlueskyCardProps = React.HTMLAttributes<HTMLDivElement> & {
  author: {
    name: string;
    username: string;
    image: string;
  };
  engagement?: {
    replies?: number;
    reposts?: number;
    likes?: number;
  };
  text: string;
  images?: {
    src: string;
  }[];
  time: Date | string;
  permalink?: string;
  clickableProfileLink?: boolean;
  theme?: ThemeOption;
  colors?: BlueskyCardColors;
  gradientBackground?: boolean;
  blurredBackground?: boolean;
  fitInsideContainer?: boolean;
  showTime?: boolean;
  showEngagement?: boolean;
  showBlueskyLogo?: boolean;
};

const BlueskyCard = ({
  author,
  text,
  time,
  permalink,
  engagement,
  clickableProfileLink,
  showTime = true,
  showEngagement = true,
  showBlueskyLogo = true,
  images,
  ...rest
}: BlueskyCardProps) => (
  <Container {...{ ...rest }}>
    <UserDetails {...{ ...author, clickableProfileLink }} />
    {showBlueskyLogo && <BlueskyLogo {...{ permalink }} />}
    <Text {...{ text }} />
    {images?.length && <Images {...{ images }} />}
    {showTime && <Time {...{ time, permalink }} />}
    {showEngagement && <Engagement {...{ ...engagement }} />}
  </Container>
);

export default BlueskyCard;
