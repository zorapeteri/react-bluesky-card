import { BlueskyCardProps } from 'index';
import React from 'react';
import className from 'utils/className';
import globalClassName from 'utils/globalClassName';
import css from './Username.module.css';

type UsernameProps = Pick<BlueskyCardProps['author'], 'username'> &
  Pick<BlueskyCardProps, 'clickableProfileLink'>;

const Username = ({ username, clickableProfileLink }: UsernameProps) => (
  <span
    {...className(
      globalClassName('author-username'),
      css.username,
      clickableProfileLink && css.clickable
    )}
  >
    @{username}
  </span>
);

export default Username;
