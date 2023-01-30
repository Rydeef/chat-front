import React, { FC, useState } from 'react';
import cn from 'classnames';
import { useAppDispatch } from '../../../app/hooks';
import { logOutUserAction } from '../../../app/modules/auth/actions';
import { ReactComponent as SettingsSvg } from '../../../assets/settings.svg';
import { ReactComponent as ExitSvg } from '../../../assets/exit.svg';
import { ReactComponent as SunSvg } from '../../../assets/sun.svg';
import { ReactComponent as MoonSvg } from '../../../assets/moon.svg';

type ThemeType = 'light' | 'dark';

interface Props {
  userName?: string;
}

const STYLE_MENU_ITEM =
  'flex fill-[#C6C5C5] items-center px-4 py-2 rounded-full cursor-pointer duration-100 hover:bg-gray-2 hover:text-white hover:fill-[#D9D9D9] select-none';

const UserMenu: FC<Props> = ({ userName }) => {
  const [currentTheme, setCurrentTheme] = useState<string>('light');

  const dispatch = useAppDispatch();

  const switchTheme = (theme: ThemeType) => () => setCurrentTheme(theme);

  const logOut = () => {
    dispatch(logOutUserAction());
  };

  return (
    <div className='absolute top-0 right-0 z-10'>
      <div className='bg-[#232325] w-[220px] rounded p-2 grid gap-3 text-[#C6C5C5]'>
        <div className='text-2xl text-center w-full text-white'>{userName}</div>
        <div className='border-y-2 border-white dorder-white py-2 grid gap-3'>
          <div className='flex w-full text-black select-none'>
            <div
              className={cn(
                'flex w-1/2 py-4 bg-white cursor-pointer duration-200 pl-2 rounded-l-lg',
                {
                  'bg-[#3980C1] text-white fill-white ':
                    currentTheme === 'light',
                }
              )}
              onClick={switchTheme('light')}
            >
              <SunSvg className='w-6 shrink-0' />
              <div className='text-center w-full'>light</div>
            </div>
            <div
              className={cn(
                'flex w-1/2 bg-white py-4 pr-2 rounded-r-lg cursor-pointer duration-200',
                {
                  'bg-[#3980C1] text-white fill-white ':
                    currentTheme === 'dark',
                }
              )}
              onClick={switchTheme('dark')}
            >
              <div className='text-center w-full'>dark</div>
              <MoonSvg className='w-6 shrink-0' />
            </div>
          </div>
          <div className={STYLE_MENU_ITEM}>
            <SettingsSvg className='shrink-0' />
            <div className='text-xl text-center w-full'>Settings</div>
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
