import React from 'react';
import * as yup from 'yup';
import { FormikProvider, useFormik } from 'formik';
import Avatar from '../Avatar/Avatar';
import { AVATAR_SIZES } from '../Avatar/constants';
import Button from '../Button/Button';
import { Input } from './Input';

interface UserData {
  name?: string;
  password?: string;
  confirmPassword?: string;
}

const VALIDATION_SCHEMA = yup.object().shape({
  name: yup.string(),
  password: yup
    .string()
    .min(4, 'Require minimum 4 symbol')
    .max(14, 'Require maximum 14 symbol'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const FormChangeName = () => {
  const onSubmit = (values: UserData) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
      confirmPassword: '',
    },
    validateOnChange: true,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit,
  });

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit} className='w-[800px] h-full'>
        <div className='flex items-center'>
          <Avatar color='827397' titleChat='T' size={AVATAR_SIZES.M} />
          <Input name='name' placeholder='Name' className='w-full ml-12' />
        </div>
        <div className='my-8'>
          <Input name='password' placeholder='Password' />
          <Input name='confirmPassword' placeholder='Confirm password' />
          <div className='flex justify-between'>
            <Button color='green' type='submit' className='w-[250px]'>
              Save
            </Button>
            <Button
              color='red'
              type='button'
              onClick={() => formik.resetForm()}
              className='w-[250px]'
            >
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </FormikProvider>
  );
};

export default FormChangeName;
