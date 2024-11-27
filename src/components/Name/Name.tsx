import className from '../../utils/className';
import globalClassName from '../../utils/globalClassName';
import { BlueskyCardProps } from '../../main';
import css from './Name.module.css';

type NameProps = Pick<BlueskyCardProps['author'], 'name'> &
  Pick<BlueskyCardProps, 'clickableProfileLink'>;

const Name = ({ name, clickableProfileLink }: NameProps) => (
  <span
    {...className(
      globalClassName('author-name'),
      css.name,
      clickableProfileLink && css.clickable
    )}
  >
    <span>{name}</span>
  </span>
);

export default Name;
