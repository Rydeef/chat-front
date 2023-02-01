import React, { FC, KeyboardEvent, useRef, useState } from 'react';
import { useField } from 'formik';
import EmojiPicker, {
  EmojiClickData,
  EmojiStyle,
  Theme,
} from 'emoji-picker-react';
import { ReactComponent as SendMessageSVG } from 'assets/message.svg';
import { ReactComponent as SmileSVG } from 'assets/smile.svg';

interface Props {
  name: string;
  placeholder?: string;
  className?: string;
  sendMessage: VoidFunction;
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

  const textAr = useRef<HTMLTextAreaElement>(null);

  const [emojiBar, setEmojiBar] = useState<boolean>(false);

  const selectEmoji = (emojiData: EmojiClickData) => {
    const start = textAr.current?.selectionStart;
    const end = textAr.current?.selectionEnd;

    setValue(value.slice(0, start) + emojiData.emoji + value.slice(end));
  };

  const toggleClickEmoji = () => setEmojiBar((prev) => !prev);

  return (
    <div className='h-10 relative'>
      {emojiBar && (
        <div className='absolute bottom-12'>
          <EmojiPicker
            theme={Theme.DARK}
            onEmojiClick={selectEmoji}
            autoFocusSearch={false}
            searchDisabled
            lazyLoadEmojis
            emojiStyle={EmojiStyle.NATIVE}
          />
        </div>
      )}
      <div className='w-full h-full flex bg-white rounded justify-center items-center'>
        <div className='w-8 cursor-pointer mx-2'>
          <SmileSVG onClick={toggleClickEmoji} />
        </div>
        <textarea
          className='w-full h-full resize-none text-black px-3 py-2 rounded focus:outline-0'
          value={value}
          ref={textAr}
          placeholder={placeholder}
          onKeyDown={sendMessageEnter}
          {...field}
        />
        <span className='h-full w-0.5 bg-black' />
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
