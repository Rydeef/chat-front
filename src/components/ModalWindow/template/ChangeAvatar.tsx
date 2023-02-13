import React, { FC } from 'react';
import Upload from 'components/Upload/Upload';
import { ReactComponent as CloseSVG } from '../../../assets/close.svg';

interface Props {
  onClose: VoidFunction;
}

const ChangeAvatar: FC<Props> = ({ onClose }) => {
  return (
    <div className='w-125 h-64 flex items-center justify-center relative'>
      <CloseSVG
        onClick={onClose}
        className='cursor-pointer absolute top-0 right-0'
      />
      <Upload onClosePopup={onClose} />
    </div>
  );
};

export default ChangeAvatar;
