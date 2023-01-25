import React, { ChangeEvent, FC, useState } from 'react';
import cn from 'classnames';
import { ReactComponent as EyeSVG } from '../../assets/eye.svg';

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
    { 'pr-14': type === 'password' }
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
        <EyeSVG
          className='absolute top-1/2 -translate-y-1/2 right-3 w-10 duration-200 fill-white/80 hover:fill-white cursor-pointer'
          onClick={switchType}
        />
      )}
    </div>
  );
};

export default TextField;
