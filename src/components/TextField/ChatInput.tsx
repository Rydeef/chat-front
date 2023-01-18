import React, { FC, KeyboardEvent } from 'react';
import * as yup from 'yup';
import { FormikProvider, useFormik } from 'formik';
import TextArea from '../FormField/TextArea';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { sendMessageAsync } from '../../app/modules/chat/actions';
import { selectActiveChat } from '../../app/modules/chat/selectors';
import { Socket } from 'socket.io-client';

const MASSAGE_NAME = 'message';

const VALIDATION_SCHEMA = yup.object().shape({
  message: yup.string().required(''),
});

export interface UserMessage {
  message: string;
}

interface Props {
  socket: Socket | null;
}

const ChatInput: FC<Props> = ({ socket }) => {
  const dispatch = useAppDispatch();

  const chat = useAppSelector(selectActiveChat);

  const onSubmit = (values: UserMessage) => {
    dispatch(sendMessageAsync({ id: chat?._id!, message: values.message }));

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
