import { FormikProvider, useFormik } from 'formik';
import * as yup from 'yup';
import React from 'react';

import { ReactComponent as Logo } from '../assets/logo.svg';
import Button from '../components/Button/Button';
import { Input } from '../components/FormField/Input';
import { history } from '../services/history';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { authUserAsync } from '../app/modules/auth/actions';
import { selectUserData } from '../app/modules/auth/selectors';

interface LoginFormValues {
  userName: string;
  password: string;
}

const VALIDATION_SCHEMA = yup.object().shape({
  userName: yup.string().required('Required'),
  password: yup
    .string()
    .required('Required')
    .min(4, 'Require minimum 4 symbol')
    .max(14, 'Require maximum 14 symbol'),
});

const Login = () => {
  const dispatch = useAppDispatch();

  const onSubmit = (values: LoginFormValues) => {
    dispatch(authUserAsync(values));
  };

  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
    },
    validateOnChange: true,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit,
  });

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
          <Input name='userName' placeholder='Login' />
          <Input type='password' name='password' placeholder='Enter password' />
          <div className='flex w-full mt-9'>
            <Button
              type='submit'
              color='primary'
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
