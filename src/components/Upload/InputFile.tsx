import React, { ChangeEvent, DragEvent, FC, useRef, useState } from 'react';
import cn from 'classnames';
import { useField } from 'formik';
import { ReactComponent as DownloadSVG } from 'assets/download.svg';

interface Props {
  name: string;
  width: number;
  height: number;
  handleSubmit: VoidFunction;
}

const DEFAULT_CLASS_NAME =
  'relative border-2 border-dashed border-white p-10 flex flex-col items-center justify-center gap-3 cursor-pointer duration-200 bg-blue/40 hover:bg-blue/80';

const InputFile: FC<Props> = ({ name, width, height, handleSubmit }) => {
  const [dragActive, setDragActive] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const [{ value, ...field }, , { setValue }] = useField(name);

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setValue(e.target.files[0] || {});

      handleSubmit();
    }
  };

  const handleDrop = (e: DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setValue(e.dataTransfer.files[0]);

    handleSubmit();

    setDragActive(false);
  };

  const clickBlock = () => inputRef?.current?.click();

  return (
    <div
      onClick={clickBlock}
      onDrop={handleDrop}
      onDragEnter={handleDrag}
      style={{ width: `${width}px`, height: `${height}px` }}
      className={cn(DEFAULT_CLASS_NAME, {
        'bg-blue/80': dragActive,
      })}
    >
      <input
        {...field}
        className='hidden'
        accept='image/jpeg, image/jpg, image/png'
        type='file'
        ref={inputRef}
        onChange={handleChange}
      />
      <DownloadSVG className='text-white w-14' />
      <label>Choose file or drag it here.</label>
      {dragActive && (
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          style={{ width: `${width}px`, height: `${height}px` }}
          className='absolute z-50 w-100 h-200 top-0 left-0'
        />
      )}
    </div>
  );
};

export default InputFile;
