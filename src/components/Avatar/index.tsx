import React, { FC } from 'react';
import cn from 'classnames';
import { AVATAR_SIZE } from './constants';
import Img from './pict.jpg';

interface IProps {
  titleChat: string;
  color: string;
  size: AVATAR_SIZE;
  imgUser?: string;
}

const getRandomColor = (arr: string[]) => {
  return arr[Math.round(Math.random() * arr.length)];
};

const Avatar: FC<IProps> = ({
  titleChat,
  color,
  size = AVATAR_SIZE.S,
  imgUser,
}) => {
  const defaultClassName: string = cn(
    'rounded-full flex items-center justify-center pointer-events-none select-none',
    color,
    size
  );

  if (imgUser) return <img src={Img} className={defaultClassName} alt='' />;

  return (
    <div className={defaultClassName}>
      <span className='text-center'>{titleChat[0]}</span>
    </div>
  );
};

export default Avatar;
