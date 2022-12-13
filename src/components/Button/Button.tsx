import React, { FC, ReactNode } from 'react';
import cn from 'classnames';

interface Props {
  children: ReactNode;
  className?: string;
  color: 'primary' | 'secondary';
  onClick?: VoidFunction;
  type?: 'submit' | 'button';
}

const Button: FC<Props> = ({ children, color, className, onClick, type = 'button' }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={cn(
        'p-2 text-white font-bold rounded-lg hover:opacity-80 duration-300 w-full',
        className,
        {
          'bg-accent': color === 'primary',
          'bg-gray3': color === 'secondary',
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
