import React, { ChangeEvent, FC, useState } from 'react';
import cn from 'classnames';
import { ReactComponent as Eye1SVG } from 'assets/eye-1.svg';
import { ReactComponent as Eye2SVG } from 'assets/eye-2.svg';

interface Props {
  type?: 'text' | 'password';
  placeholder?: string;
  className?: string;
  isDisabled?: boolean;
  value: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
}

const TextField: FC<Props> = ({
  type = 'text',
  placeholder,
  className,
  isDisabled,
  ...props
}) => {
  const [typeInput, setTypeInut] = useState(type);

  const inputStyle = cn(
    'w-full bg-gray-0 text-gray-3 outline-none p-2 rounded-md text-base placeholder:text-gray-1 duration-300 hover:bg-gray-2 focus:bg-gray-2',
    className,
    { 'pr-10': type === 'password' }
  );

  const switchType = () =>
    setTypeInut((prev) => (prev === 'password' ? 'text' : 'password'));

  return (
    <div className='relative'>
      <input
        type={typeInput}
        placeholder={placeholder}
        className={inputStyle}
        disabled={isDisabled}
        {...props}
      />
      {type === 'password' && (
        <div
          className='absolute p-2 flex items-center justify-center top-0 right-0 w-10 h-full duration-300 opacity-80 hover:opacity-100 cursor-pointer'
          onClick={switchType}
        >
          {typeInput === 'password' ? (
            <Eye1SVG className='w-full h-full' />
          ) : (
            <Eye2SVG className='w-full h-full' />
          )}
        </div>
      )}
    </div>
  );
};

export default TextField;
