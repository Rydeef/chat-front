import React from 'react';
import * as yup from 'yup';
import { FormikProvider, useFormik } from 'formik';
import Avatar from '../components/Avatar/Avatar';
import { AVATAR_SIZES } from '../components/Avatar/constants';
import { history } from '../services/history';
import { Input } from '../components/FormField/Input';
import Button from '../components/Button/Button';

const VALIDATION_SCHEMA = yup.object().shape({
  userName: yup.string(),
  password: yup
    .string()
    .min(4, 'Require minimum 4 symbol')
    .max(14, 'Require maximum 14 symbol'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const Setting = () => {
  const onSubmit = (values: any) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
      confirmPassword: '',
    },
    validateOnChange: true,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit,
  });

  const redirectBack = () => {
    history.back();
  };

  return (
    <div className='w-full h-[800px] flex justify-center'>
      <div className='bg-transparent py-10 px-20 flex flex-col items-center'>
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit} className='w-[800px] h-full'>
            <div className='flex items-center'>
              <Avatar color='827397' titleChat='T' size={AVATAR_SIZES.L} />
              <Input
                name='userName'
                placeholder='Name'
                className='w-full ml-12'
              />
            </div>
            <div className='my-20'>
              <Input name='password' placeholder='Password' />
              <Input name='confirmPassword' placeholder='Confirm password' />
              <div className='flex justify-between'>
                <Button color='green' type='submit' className='w-[250px]'>
                  Save
                </Button>
                <Button
                  color='red'
                  type='button'
                  onClick={redirectBack}
                  className='w-[250px]'
                >
                  Cancel
                </Button>
              </div>
            </div>
            <div className='w-full flex flex-col bg-primary px-5 py-3 divide-y divide-white rounded-md'>
              <button
                type='button'
                className='py-3 duration-200 text-[#F40000]/70 hover:text-[#F40000]/100'
              >
                Delete accout
              </button>
              <button className='py-3'>Sign Out</button>
            </div>
          </form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default Setting;
