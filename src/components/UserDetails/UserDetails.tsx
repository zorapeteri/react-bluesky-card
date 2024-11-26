import React from 'react';
import { BlueskyCardProps } from 'index';
import ProfilePicture from '../ProfilePicture';
import Name from '../Name';
import Username from '../Username';
import css from './UserDetails.module.css';

type UserDetailsProps = BlueskyCardProps['author'] &
  Pick<BlueskyCardProps, 'clickableProfileLink'>;

const UserDetails = ({
  name,
  username,
  image,
  clickableProfileLink,
}: UserDetailsProps) => {
  const Tag = clickableProfileLink ? 'a' : 'div';

  return (
    <Tag
      {...(clickableProfileLink && {
        href: `https://bsky.app/profile/${username}`,
        target: '_blank',
        rel: 'noreferrer',
      })}
      className={css.userDetails}
      aria-label={[
        `${`Post by Bluesky user ${name}`} (@${username})`,
        clickableProfileLink &&
          `Click this link to open their profile on bsky.app`,
      ]
        .filter(Boolean)
        .join('. ')}
    >
      <ProfilePicture {...{ image, clickableProfileLink }} />
      <Name
        {...{
          name,
          clickableProfileLink,
        }}
      />
      <Username {...{ username, clickableProfileLink }} />
    </Tag>
  );
};

export default UserDetails;
