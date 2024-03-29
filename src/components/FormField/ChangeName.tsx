import React from 'react';
import * as yup from 'yup';
import { FormikProvider, useFormik } from 'formik';
import Button from '../Button/Button';
import { Input } from './Input';

interface UserData {
  name?: string;
  password?: string;
}

const VALIDATION_SCHEMA = yup.object().shape({
  name: yup.string(),
  password: yup
    .string()
    .min(4, 'Require minimum 4 symbol')
    .max(14, 'Require maximum 14 symbol'),
});

const FormChangeName = () => {
  const onSubmit = (values: UserData) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    validateOnChange: true,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit,
  });

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit} className='w-200 h-full'>
        <div className='my-16'>
          <Input name='name' placeholder='Name' className='w-full' />
          <Input type='password' name='password' placeholder='Password' />
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

export default FormChangeName;
