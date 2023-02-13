import React, { FC, ReactNode } from 'react';
import cn from 'classnames';

interface Props {
  children: ReactNode;
  className?: string;
  color: 'primary' | 'secondary' | 'red' | 'transparent';
  onClick?: VoidFunction;
  type?: 'submit' | 'button';
}

const Button: FC<Props> = ({
  children,
  color,
  className,
  onClick,
  type = 'button',
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={cn(
        'p-2 text-white font-bold rounded-lg opacity-80 hover:opacity-100 duration-300 w-full',
        className,
        {
          'bg-accent': color === 'primary',
          'bg-gray-2': color === 'secondary',
          'bg-[#CD4343]': color === 'red',
          'bg-transparent': color === 'transparent',
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
