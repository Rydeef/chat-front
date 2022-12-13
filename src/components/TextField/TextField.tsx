import React, { ChangeEvent, FC } from 'react';
import cn from 'classnames';

interface Props {
  placeholder?: string;
  className?: string;
  isDisabled?: boolean;
  value: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
}

const TextField: FC<Props> = ({ placeholder, className, isDisabled, ...props }) => {
  const inputStyle = cn(
    'w-full bg-gray text-gray2 outline-none p-2 rounded-md text-base placeholder:text-gray2 duration-300 hover:bg-gray3 focus:bg-gray3',
    className
  );
  return (
    <input placeholder={placeholder} className={inputStyle} disabled={isDisabled} {...props} />
  );
};

export default TextField;
