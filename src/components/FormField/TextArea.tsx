import React, { FC, KeyboardEvent, useState } from 'react';
import { useField } from 'formik';
import { ReactComponent as SendMessageSVG } from '../../assets/message.svg';
import { ReactComponent as SmileSVG } from '../../assets/smile.svg';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';

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
  const [{ value, ...field }, , { setValue }] = useField(name);

  const [emojiBar, setEmojiBar] = useState<boolean>(false);

  const selectEmoji = (emojiData: EmojiClickData) => setValue(emojiData.emoji);

  return (
    <div className='h-[40px] relative'>
      {emojiBar && (
        <div className='absolute bottom-12'>
          <EmojiPicker
            onEmojiClick={selectEmoji}
            autoFocusSearch={false}
            searchDisabled={true}
            lazyLoadEmojis={true}
          />
        </div>
      )}

      <div className='w-full h-full flex bg-white rounded justify-center items-center'>
        <div className='w-8 cursor-pointer mx-2'>
          <SmileSVG onClick={() => setEmojiBar((prev) => !prev)} />
        </div>
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
          <SendMessageSVG />
        </div>
      </div>
    </div>
  );
};

export default TextArea;
