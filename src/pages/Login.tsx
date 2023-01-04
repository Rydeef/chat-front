import { FormikProvider, useFormik } from 'formik';
import * as yup from 'yup';
import React from 'react';

import { ReactComponent as Logo } from '../assets/logo.svg';
import Button from '../components/Button/Button';
import { Input } from '../components/FormField/Input';
import { history } from '../services/history';

export interface LoginFormValues {
  username?: string;
  password?: string;
}

const VALIDATION_SCHEMA = yup.object().shape({
  username: yup.string().required('Required'),
  password: yup
    .string()
    .required('Required')
    .min(4, 'Require minimum 4 symbol')
    .max(14, 'Require maximum 14 symbol'),
});

const Login = () => {
  const onSubmit = (values: LoginFormValues) => {};

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validateOnChange: true,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit,
  });

  const login = () => {
    console.log(formik.values);
  };

  const redirectRegister = () => {
    history.push('/register');
  };

  return (
    <div className='flex justify-center items-center h-full'>
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit} className='w-[480px]'>
          <div className='w-full flex justify-center items-end mb-12 text-accent text-4xl'>
            <Logo />
            Talk-on
          </div>
          <Input name='username' placeholder='Login' />
          <Input name='password' placeholder='Enter password' />
          <div className='flex w-full mt-9'>
            <Button
              type='submit'
              color='primary'
              onClick={login}
              className='mr-4 w-full text-sm'
            >
              Login
            </Button>
            <Button
              color='secondary'
              onClick={redirectRegister}
              className='w-full text-sm'
            >
              Don't have account? Register
            </Button>
          </div>
        </form>
      </FormikProvider>
    </div>
  );
};

export default Login;
