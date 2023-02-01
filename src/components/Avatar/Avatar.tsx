import React, { FC } from 'react';
import cn from 'classnames';
import { AVATAR_SIZES } from './constants';

interface Props {
  titleChat?: string;
  color?: string;
  size?: AVATAR_SIZES;
  onClick?: VoidFunction;
}

const Avatar: FC<Props> = ({
  titleChat = '',
  color,
  size = AVATAR_SIZES.S,
  onClick,
}) => {
  const defaultClassName: string = cn(
    'rounded-full flex items-center justify-center select-none shrink-0 cursor-pointer',
    size
  );

  return (
    <div
      className={defaultClassName}
      style={{ backgroundColor: `#${color}` }}
      onClick={onClick}
    >
      <span className='text-center'>{titleChat[0]}</span>
    </div>
  );
};

export default Avatar;
