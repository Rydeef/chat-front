import React, { ChangeEvent, FC } from 'react';
import cn from 'classnames';

interface Props {
  placeholder?: string;
  className?: string;
  isDisabled?: boolean;
  value: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
}

const TextField: FC<Props> = ({
  placeholder,
  className,
  isDisabled,
  ...props
}) => {
  const inputStyle = cn(
    'w-full bg-gray-0 text-gray-3 outline-none p-2 rounded-md text-base placeholder:text-gray-1 duration-300 hover:bg-gray-2 focus:bg-gray-2',
    className
  );
  return (
    <input
      placeholder={placeholder}
      className={inputStyle}
      disabled={isDisabled}
      {...props}
    />
  );
};

export default TextField;
