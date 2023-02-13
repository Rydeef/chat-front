import Button from 'components/Button/Button';
import React, { FC } from 'react';

interface Props {
  closeModal: VoidFunction;
}

const DeleteAccout: FC<Props> = ({ closeModal }) => {
  const deleteAccount = () => {
    console.log('delete');
    closeModal();
  };

  return (
    <div className='w-105 h-ful flex flex-col gap-6'>
      <span className='text-3xl text-red text-center'>Delete Account</span>
      <span className='text-lg'>Delete acount?</span>
      <div className='flex w-full justify-between'>
        <Button
          className='w-40'
          color='red'
          type='button'
          onClick={deleteAccount}
        >
          Yes
        </Button>
        <Button
          className='w-40'
          color='secondary'
          type='button'
          onClick={closeModal}
        >
          No
        </Button>
      </div>
    </div>
  );
};

export default DeleteAccout;
