import React, { KeyboardEvent } from 'react';
import * as yup from 'yup';
import { FormikProvider, useFormik } from 'formik';
import TextArea from '../FormField/TextArea';

const MASSAGE_NAME = 'message';

const VALIDATION_SCHEMA = yup.object().shape({
  message: yup.string().required(''),
});

export interface UserMessage {
  message?: string;
}

const ChatInput = () => {
  const onSubmit = (values: UserMessage) => {
    console.log(values);
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      message: '',
    },
    validateOnChange: true,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit,
  });

  const sendMessageEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit(formik.values);
    }

    if (formik.values.message === '') return null;
  };

  const sendMessage = () => {
    if (formik.values.message === '') return null;

    onSubmit(formik.values);
  };

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit} className='w-full h-full'>
        <TextArea
          name={MASSAGE_NAME}
          placeholder={MASSAGE_NAME}
          sendMessage={sendMessage}
          sendMessageEnter={sendMessageEnter}
        />
      </form>
    </FormikProvider>
  );
};

export default ChatInput;
