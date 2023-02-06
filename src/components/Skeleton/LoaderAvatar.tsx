import React, { FC } from 'react';
import cn from 'classnames';
import Shimmer from './Shimmer';
import { AVATAR_SIZES } from 'components/Avatar/constants';

interface Props {
  size?: AVATAR_SIZES;
}

const LoaderAvatar: FC<Props> = ({ size }) => {
  const className = cn('!rounded-full shrink-0', size);

  return <Shimmer className={className} />;
};

export default LoaderAvatar;
