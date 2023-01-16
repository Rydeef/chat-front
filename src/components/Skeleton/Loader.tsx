import React, { FC } from 'react';
import cn from 'classnames';
import { LOADER_SIZES } from './constants';

interface Props {
  size?: LOADER_SIZES;
}

const Loader: FC<Props> = ({ size = LOADER_SIZES.XS }) => (
  <div
    className={cn(
      'animate-spin border border-gray-3 border-t-black rounded-full',
      size
    )}
  />
);

export default Loader;
