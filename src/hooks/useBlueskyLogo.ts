import React from 'react';
import useResizeObserver from 'use-resize-observer';

const useBlueskyLogo = (ref: React.RefObject<HTMLDivElement>) => {
  const { width = 0, height = 0 } = useResizeObserver<HTMLDivElement>({
    ref,
    box: 'border-box',
  });

  return height > width && 'hideBlueskyLogo';
};

export default useBlueskyLogo;
