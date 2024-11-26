import React from 'react';
import BlueskyLogoSvg from 'assets/BlueskyLogo.svg';
import className from 'utils/className';
import globalClassName from 'utils/globalClassName';
import { BlueskyCardProps } from 'index';
import css from './BlueskyLogo.module.css';

type BlueskyLogoProps = Pick<BlueskyCardProps, 'permalink'>;

const BlueskyLogo = ({ permalink }: BlueskyLogoProps) => {
  const Tag = permalink ? 'a' : 'div';
  const linkProps = {
    href: permalink,
    target: '_blank',
    rel: 'noreferrer',
    'aria-label': `View post on bsky.app`,
  };
  const divProps = { 'aria-hidden': true };

  return (
    <Tag {...(permalink ? linkProps : divProps)}>
      <img
        src={BlueskyLogoSvg}
        {...className(globalClassName('bluesky-logo'), css.blueskyLogo)}
        alt=""
      />
    </Tag>
  );
};

export default BlueskyLogo;
