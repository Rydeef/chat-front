import React from 'react';
import * as yup from 'yup';
import { FormikProvider, useFormik } from 'formik';
import Button from '../Button/Button';
import { Input } from './Input';

interface UserData {
  oldPassword?: string;
  password?: string;
  confirmPassword?: string;
}

const VALIDATION_SCHEMA = yup.object().shape({
  oldPassword: yup.string(),
  password: yup
    .string()
    .min(4, 'Require minimum 4 symbol')
    .max(14, 'Require maximum 14 symbol'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const ChangePassword = () => {
  const onSubmit = (values: UserData) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      password: '',
      confirmPassword: '',
    },
    validateOnChange: true,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit,
  });

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit} className='w-200 h-full'>
        <div className='my-16'>
          <Input
            type='password'
            name='oldPassword'
            placeholder='Old Password'
          />
          <Input type='password' name='password' placeholder='Password' />
          <Input
            type='password'
            name='confirmPassword'
            placeholder='Confirm password'
          />
          <div className='flex justify-between'>
            <Button color='primary' type='submit' className='w-60'>
              Save
            </Button>
            <Button
              color='red'
              type='button'
              onClick={formik.resetForm}
              className='w-60'
            >
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </FormikProvider>
  );
};

export default ChangePassword;
