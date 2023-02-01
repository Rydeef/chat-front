import React, { FC } from 'react';
import * as yup from 'yup';
import { FormikProvider, useFormik } from 'formik';
import Button from 'components/Button/Button';
import { Input } from 'components/FormField/Input';
import { ReactComponent as CloseButton } from 'assets/close-button.svg';

interface Props {
  onClose: () => void;
}

interface FormSubmit {
  nameChat: string;
}

const VALIDATION_SCHEMA = yup.object().shape({
  nameChat: yup.string().required('Required'),
});

const CreateChat: FC<Props> = ({ onClose }) => {
  const onSubmit = (values: FormSubmit) => {};

  const formik = useFormik({
    initialValues: {
      nameChat: '',
    },
    validateOnChange: true,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit,
  });

  const createChat = () => {
    console.log(formik.values);
    onClose();
  };

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        <div className='w-[500px] grid gap-4'>
          <div className='flex justify-between items-center mb-5'>
            <span className='text-4xl text-[#39C198] uppercase tracking-wide'>
              Create chat
            </span>
            <CloseButton onClick={onClose} className='cursor-pointer' />
          </div>
          <Input placeholder='Name chat' name='nameChat' />
          <div>
            <Button color='primary' onClick={createChat}>
              Create
            </Button>
          </div>
        </div>
      </form>
    </FormikProvider>
  );
};

export default CreateChat;
