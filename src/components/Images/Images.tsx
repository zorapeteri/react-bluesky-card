import { useRef } from 'react';
import className from '../../utils/className';
import globalClassName from '../../utils/globalClassName';
import { BlueskyCardProps } from '../../main';
import css from './Images.module.css';

type ImagesProps = Pick<BlueskyCardProps, 'images'>;

const Images = ({ images = [] }: ImagesProps) => {
  const ref = useRef(null);
  const count = Math.min(images.length, 4);
  return (
    <div {...className(globalClassName('imageContainer'), css.imageContainer)}>
      <div
        {...className(globalClassName('imageContent'), css.imageContent)}
        ref={ref}
        style={{
          gridTemplateRows: count > 2 ? '1fr 1fr' : '1fr',
          gridTemplateColumns: count > 1 ? '1fr 1fr' : '1fr',
        }}
      >
        {images.slice(0, 4).map(({ src }, index) => (
          <div
            {...className(globalClassName('image'), css.imageBackground)}
            key={src}
            style={{
              backgroundImage: `url(${src})`,
              gridRow: count === 3 && index === 0 ? '1/3' : undefined,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Images;
