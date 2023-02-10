import React, { ChangeEvent, DragEvent, FC, useRef, useState } from 'react';
import cn from 'classnames';
import { ReactComponent as DownloadSVG } from 'assets/download.svg';
import { toast } from 'react-toastify';
import { FormikProvider, useFormik } from 'formik';

interface Props {
  width?: number;
  height?: number;
  onClosePopup: VoidFunction;
}

const TYPE_FILE = ['image/jpeg', 'image/jpg', 'image/png'];

const MAX_FILE_SIZE = 5242880;

const DEFAULT_CLASS_NAME =
  'relative border-2 border-dashed border-white p-10 flex flex-col items-center justify-center gap-3 cursor-pointer duration-200 bg-blue/40 hover:bg-blue/80';

const Upload: FC<Props> = ({ width = 400, height = 180, onClosePopup }) => {
  const [dragActive, setDragActive] = useState<boolean>(false);

  const inputFile = useRef<HTMLInputElement | null>(null);

  const onSubmit = (file: any) => {
    if (file?.length) {
      if (!TYPE_FILE.includes(file[0].type)) {
        toast.error('Wrong file type');
      } else if (file[0].size > MAX_FILE_SIZE) {
        toast.error('The file is too large');
      } else {
        toast.success('File uploaded successfully');
        console.log(
          JSON.stringify({
            fileName: file[0].name,
            type: file[0].type,
            size: `${file[0].size} bytes`,
          })
        );
        onClosePopup();
      }
    } else {
      toast.error('Error load file');
    }
  };

  const formik = useFormik({
    initialValues: {
      file: null,
    },
    onSubmit,
  });

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
    e.preventDefault();

    if (e.target.files?.length) {
      onSubmit(e.target.files);
    }
  };

  const handleDrop = (e: DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();

    onSubmit(e.dataTransfer.files);
    setDragActive(false);
  };

  const clickBlock = () => inputFile?.current?.click();

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
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
            className='hidden'
            accept='image/jpeg, image/jpg, image/png'
            type='file'
            ref={inputFile}
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
      </form>
    </FormikProvider>
  );
};

export default Upload;
