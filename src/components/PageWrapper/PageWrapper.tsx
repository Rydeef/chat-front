import React, { FC, ReactNode, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';

interface IProps {
    children: ReactNode
}

const PageWrapper: FC<IProps> = ({children}) => {

    useEffect(()=> {
        if(!localStorage.getItem('talkaccesstoken')){
            // history.push('/login')
        }
    },[])

    return <div className='flex h-full'>
        <Sidebar/>
        {children}
    </div>
}

export default PageWrapper;