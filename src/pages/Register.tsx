import { FormikProvider, useFormik } from 'formik';
import * as yup from 'yup';
import React from 'react';

import { ReactComponent as Logo } from '../assets/logo.svg';
import Button from '../components/Button/Button';
import { Input } from '../components/FormField/Input';
import { history } from '../services/history';
import { useAppDispatch } from '../app/hooks';
import { registerUserAsync } from '../app/modules/auth/actions';

export interface RegisterFormValues {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const VALIDATION_SCHEMA = yup.object().shape({
  userName: yup.string().required('Required'),
  email: yup.string().required('Required').email('Must be an email'),
  password: yup
    .string()
    .required('Required')
    .min(4, 'Require minimum 4 symbol')
    .max(14, 'Require maximum 14 symbol'),
  confirmPassword: yup
    .string()
    .required('Required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const Register = () => {
  const dispatch = useAppDispatch();
  const onSubmit = (values: RegisterFormValues) => {
    dispatch(registerUserAsync(values));
  };

  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validateOnChange: true,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit,
  });

  const redirectLogin = () => {
    history.push('/login');
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
          <Input name='email' placeholder='E-mail' />
          <Input name='password' placeholder='Enter password' />
          <Input name='confirmPassword' placeholder='Confirm password' />
          <div className='flex w-full mt-9'>
            <Button
              type='submit'
              color='primary'
              className='mr-4 w-full text-sm'
            >
              Register
            </Button>
            <Button
              color='secondary'
              onClick={redirectLogin}
              className='w-full text-sm'
            >
              Already have account? Login
            </Button>
          </div>
        </form>
      </FormikProvider>
    </div>
  );
};

export default Register;
