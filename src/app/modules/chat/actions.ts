import { MessageItem } from './types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const SELECT_CHAT_SLICE_NAME = 'chat';
export const CHAT_LIST_SLICE_NAME = 'chatList';

export const getChatAsync = createAsyncThunk(
  `${SELECT_CHAT_SLICE_NAME}`,
  async (values) => {
    try {
      // const { data } = await instance.get('/...', values);

      return [
        {
          id: '1',
          data: {
            title: 'Ya pidoras',
            color: 'bg-[#645CAA]',
          },
          messages: [
            {
              id: '1A',
              userName: 'User',
              message: 'Idi nahui',
              time: '00:00',
            },
          ],
        },
        {
          id: '2',
          data: {
            title: 'Mi tupie',
            color: 'bg-[#827397]',
          },
          messages: [
            {
              userName: 'User',
              messages: [
                {
                  id: '1B',
                  userName: 'User',
                  message: 'Idi nahui',
                  time: '00:01',
                },
                {
                  id: '2B',
                  userName: 'User2',
                  message: 'Sam idi',
                  time: '00:02',
                },
              ],
            },
          ],
        },
        {
          id: '3',
          data: {
            title: 'PALITEH',
            color: 'bg-[#FFB26B]',
          },
          messages: [
            {
              userName: 'User',
              messages: [
                {
                  id: '1C',
                  userName: 'User',
                  message: 'Idi nahui',
                  time: '00:01',
                },
                {
                  id: '2C',
                  userName: 'User2',
                  message: 'Sam idi',
                  time: '00:02',
                },
                {
                  id: '3C',
                  userName: 'User',
                  message: 'Net ti idi',
                  time: '00:01',
                },
                {
                  id: '4C',
                  userName: 'User2',
                  message: ':c',
                  time: '00:02',
                },
              ],
            },
          ],
        },
      ] as MessageItem[];
    } catch (e) {
      console.log(e);
    }
  }
);

export const getChatList = createAsyncThunk(
  `${CHAT_LIST_SLICE_NAME}`,
  async (values) => {
    try {
      // const { data } = await instance.get('/...', values);

      return [
        {
          id: '1',
          title: 'Ya pidoras',
          lastMessage: 'Da',
          color: 'bg-[#645CAA]',
          time: '00:13',
          avatar: '',
        },
        {
          id: '2',
          title: 'Mi tupie',
          lastMessage: 'adhfsdufhsdifusdfsd',
          color: 'bg-[#827397]',
          time: '00:20',
          avatar: '',
        },
        {
          id: '3',
          title: 'PALITEH',
          lastMessage: 'Vi edete na Bahmut',
          color: 'bg-[#FFB26B]',
          time: '00:11',
          avatar: '1',
        },
      ];
    } catch (e) {
      console.log(e);
    }
  }
);
