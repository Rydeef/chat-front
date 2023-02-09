import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectUserData } from 'app/modules/currentUser/selectors';
import { logOutUserAction } from 'app/modules/auth/actions';
import { ReactComponent as SettingsSvg } from 'assets/settings.svg';
import { ReactComponent as ExitSvg } from 'assets/exit.svg';
import SwitchTheme from 'components/Button/SwitchTheme';

const STYLE_MENU_ITEM =
  'flex fill-[#C6C5C5]/80 select-none mx-2 items-center p-2 rounded-md cursor-pointer duration-200 hover:bg-gray-2 hover:text-white hover:fill-white/100 ';

const UserMenu = () => {
  const dispatch = useAppDispatch();

  const { userName } = useAppSelector(selectUserData) || {};

  const logOut = () => {
    dispatch(logOutUserAction());
  };

  return (
    <div className='absolute top-1 right-0 z-10'>
      <div className='grid gap-3 w-52 py-3 text-white rounded bg-slate-500 dark:bg-[#232325]'>
        <div className='flex justify-between mx-5'>
          <span className='text-2xl'>{userName}</span>
          <SwitchTheme />
        </div>
        <div className='py-2 border-y-2 border-white'>
          <div className={STYLE_MENU_ITEM}>
            <SettingsSvg className='shrink-0' />
            <Link to='/settings' className='text-xl text-center w-full'>
              Settings
            </Link>
          </div>
        </div>
        <div onClick={logOut} className={STYLE_MENU_ITEM}>
          <ExitSvg className='shrink-0 w-8 h-8' />
          <div className='text-xl text-center w-full'>Sign Out</div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
