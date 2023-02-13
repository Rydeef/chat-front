import React from 'react';
import { history } from 'services/history';
import { useAppDispatch } from 'app/hooks';
import { logOutUserAction } from 'app/modules/auth/actions';
import FormChangeName from 'components/FormField/ChangeName';
import ChangePassword from 'components/FormField/ChangePassword';
import { ReactComponent as ArrowBackSVG } from 'assets/arrow-back.svg';
import Avatar from 'components/Avatar/Avatar';
import { AVATAR_SIZES } from 'components/Avatar/constants';
import ModalWindow from 'components/ModalWindow/ModalWindow';
import DeleteAccout from 'components/ModalWindow/template/DeleteAccount';
import { useModal } from 'hooks/useModal';

const Settings = () => {
  const { isOpen, openModal, closeModal } = useModal();

  const dispatch = useAppDispatch();

  const logOut = () => {
    dispatch(logOutUserAction());
  };

  const redirectBack = () => {
    history.back();
  };

  return (
    <div className='w-full h-[800px] flex justify-center mt-10'>
      <div className='bg-transparent py-10 px-20 rounded-md overflow-y-auto'>
        <div className='flex relative justify-center'>
          <Avatar color='827397' titleChat='T' size={AVATAR_SIZES._128} />
          <ArrowBackSVG
            className='w-8 cursor-pointer absolute top-0 left-0 duration-300 fill-white/80 hover:fill-white/100'
            onClick={redirectBack}
          />
        </div>
        <div className='flex flex-col items-center divide-y divide-white overflow-y-auto'>
          <FormChangeName />
          <ChangePassword />
          <div className='w-full h-full pt-5'>
            <div className='flex flex-col bg-primary px-5 py-3 divide-y divide-white rounded-md mt-10'>
              <button
                type='button'
                className='py-3 duration-300 font-bold text-[#F40000]/70 hover:text-[#F40000]/100'
                onClick={openModal}
              >
                Delete accout
              </button>
              <button
                className='py-3 duration-300 font-bold text-white/80 hover:text-white/100'
                onClick={logOut}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
      <ModalWindow isOpen={isOpen} onClose={closeModal}>
        <DeleteAccout closeModal={closeModal} />
      </ModalWindow>
    </div>
  );
};

export default Settings;
