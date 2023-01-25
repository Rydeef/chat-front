import React, { FC } from 'react';
import cn from 'classnames';
import { useAppDispatch } from '../../app/hooks';
import { logOutUserAction } from '../../app/modules/auth/actions';

interface Props {
  isOpen: boolean;
}
const USER_NAME = localStorage.getItem('userName');

const DropMenu: FC<Props> = ({ isOpen }) => {
  const dispatch = useAppDispatch();

  const logOut = () => {
    dispatch(logOutUserAction());
  };

  return (
    <div className='absolute top-0 right-0 z-10 '>
      <div
        className={cn(
          'min-w-[180px] bg-[#181718] duration-300 py-2 border border-white rounded overflow-hidden',
          {
            'min-w-0 w-0 opacity-0': !isOpen,
          }
        )}
      >
        <div
          className={cn('rounded-2xl duration-300 flex flex-col gap-1', {
            'opacity-0 pointer-events-none': !isOpen,
          })}
        >
          <span className='border-b mx-4 border-white text-center pb-2 text-[20px] font-bold uppercase'>
            {USER_NAME}
          </span>
          <div className='px-6 py-2 text-[18px] flex items-center justify-between duration-100 hover:bg-gray-1 cursor-pointer'>
            <button
              onClick={logOut}
              className='whitespace-nowrap w-full h-full'
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropMenu;
