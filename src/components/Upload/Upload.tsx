import React, { FC } from 'react';
import { toast } from 'react-toastify';
import { FormikProvider, useFormik } from 'formik';
import InputFile from './InputFile';

interface Props {
  width?: number;
  height?: number;
  onClosePopup: VoidFunction;
}

const TYPE_FILE = ['image/jpeg', 'image/jpg', 'image/png'];

const MAX_FILE_SIZE = 5242880;

const Upload: FC<Props> = ({ width = 400, height = 180, onClosePopup }) => {
  const onSubmit = (value: any) => {
    if (value) {
      if (!TYPE_FILE.includes(value.file.type)) {
        toast.error('Wrong file type');
      } else if (value.file.size > MAX_FILE_SIZE) {
        toast.error('The file is too large');
      } else {
        toast.success('File uploaded successfully');
        console.log(value);
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

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        <InputFile
          handleSubmit={formik.handleSubmit}
          name='file'
          width={width}
          height={height}
        />
      </form>
    </FormikProvider>
  );
};

export default Upload;
