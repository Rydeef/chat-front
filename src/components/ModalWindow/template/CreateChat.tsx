import React, { FC } from 'react';
import { FormikProvider, useFormik } from 'formik';
import * as yup from 'yup';
import { ReactComponent as Cross } from '../../../assets/cross.svg';
import Button from '../../Button/Button';
import { Input } from '../../FormField/Input';

interface Props {
  onClose: () => void;
}

const VALIDATION_SCHEMA = yup.object().shape({
  userChat: yup.string().required('Required'),
});

const CreateChat: FC<Props> = ({ onClose }) => {
  const onSubmit = (values: { nameChat: string }) => {};

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
            <Cross onClick={onClose} className='cursor-pointer' />
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
