import React, { FC, KeyboardEvent } from 'react';
import { useField } from 'formik';
import { ReactComponent as SendMessageButton } from '../../assets/message.svg';

interface Props {
  name: string;
  placeholder?: string;
  className?: string;
  sendMessage: () => void;
  sendMessageEnter: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
}

const TextArea: FC<Props> = ({
  name,
  placeholder,
  className,
  sendMessage,
  sendMessageEnter,
}) => {
  const [{ value, ...field }] = useField(name);

  return (
    <div className='w-full h-full flex bg-white rounded justify-center items-center'>
      <textarea
        value={value}
        placeholder={placeholder}
        className='w-full h-full resize-none text-black px-3 py-2 rounded focus:outline-0'
        onKeyDown={sendMessageEnter}
        {...field}
      />
      <span className='h-full w-[2px] bg-black' />
      <div
        className='h-full flex items-center cursor-pointer px-3'
        onClick={sendMessage}
      >
        <SendMessageButton />
      </div>
    </div>
  );
};

export default TextArea;
