import React, { FC } from 'react';
import cn from 'classnames';

interface IProps {
  className?: string;
}

const Shimmer: FC<IProps> = ({ className = '' }) => {
  return (
    <div
      className={cn(
        'w-full h-full animate-pulse bg-slate-500 rounded',
        className
      )}
    ></div>
  );
};

export default Shimmer;
