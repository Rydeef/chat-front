import React, { FC } from 'react';
import cn from 'classnames';
import { AVATAR_SIZES } from './constants';

interface Props {
  titleChat?: string;
  color?: string;
  size?: AVATAR_SIZES;
}

const Avatar: FC<Props> = ({
  titleChat = '',
  color,
  size = AVATAR_SIZES.S,
}) => {
  const defaultClassName: string = cn(
    'rounded-full flex items-center justify-center pointer-events-none select-none shrink-0',
    size
  );

  return (
    <div className={defaultClassName} style={{ backgroundColor: `#${color}` }}>
      <span className='text-center'>{titleChat[0]}</span>
    </div>
  );
};

export default Avatar;
