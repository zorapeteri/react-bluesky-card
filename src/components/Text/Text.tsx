import { useRef } from 'react';
import className from '../../utils/className';
import globalClassName from '../../utils/globalClassName';
import useLinksUsernamesHashtags from '../../hooks/useLinksUsernamesHashtags';
import { BlueskyCardProps } from '../../main';
import css from './Text.module.css';

type TextProps = Pick<BlueskyCardProps, 'text'>;

const Text = ({ text = '' }: TextProps) => {
  const ref = useRef(null);
  useLinksUsernamesHashtags({ ref, text });
  return (
    <p
      ref={ref}
      {...className(
        globalClassName('text'),
        css.text,
        text.length > 180 && css.longText
      )}
    >
      {text}
    </p>
  );
};

export default Text;
