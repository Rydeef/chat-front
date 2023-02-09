import React, { FC } from 'react';
import cn from 'classnames';
import { AVATAR_SIZES } from './constants';
import LoaderAvatar from 'components/Skeleton/LoaderAvatar';

interface Props {
  titleChat?: string;
  color?: string;
  isLoading?: boolean;
  size?: AVATAR_SIZES;
  onClick?: VoidFunction;
}

const Avatar: FC<Props> = ({
  titleChat = '',
  color,
  isLoading,
  size = AVATAR_SIZES._64,
  onClick,
}) => {
  const defaultClassName: string = cn(
    'rounded-full flex items-center justify-center select-none shrink-0 cursor-pointer',
    size
  );

  if (isLoading) return <LoaderAvatar size={size} />;

  return (
    <div
      className={defaultClassName}
      style={{ backgroundColor: `#${color}` }}
      onClick={onClick}
    >
      <span className='text-center text-white'>
        {titleChat && titleChat[0].toUpperCase()}
      </span>
    </div>
  );
};

export default Avatar;
