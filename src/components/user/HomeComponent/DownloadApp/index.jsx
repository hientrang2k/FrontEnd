import React from 'react';
import { Box } from '@mui/material';
import i18n from '../../../../translations';
import CheckIcon from '@mui/icons-material/Check';
import { appStore, ggPlay } from '../../../../assets/img';

const DownloadApp = () => {
  return (
    <Box
      component='div'
      className='py-[34px] flex flex-col items-center justify-center'
    >
      <div className='font-medium text-[24px] mb-[20px]'>
        {i18n.t('downloadApp.title')}
      </div>
      <ul>
        <li className='mb-[8px] hover:text-[#45c3d2]'>
          <CheckIcon
            sx={{
              marginRight: '8px',
              color: '#45c3d2',
            }}
          />
          {i18n.t('downloadApp.advance1')}
        </li>
        <li className='mb-[8px] hover:text-[#45c3d2]'>
          <CheckIcon
            sx={{
              marginRight: '8px',
              color: '#45c3d2',
            }}
          />
          {i18n.t('downloadApp.advance2')}
        </li>
        <li className='mb-[8px] hover:text-[#45c3d2]'>
          <CheckIcon
            sx={{
              marginRight: '8px',
              color: '#45c3d2',
            }}
          />
          {i18n.t('downloadApp.advance3')}
        </li>
      </ul>
      <div className='flex gap-[10px] mt-[16px]'>
        <div className='w-[150px] cursor-pointer'>
          <img src={appStore} alt='' className='w-[100%]' />
        </div>
        <div className='h-[50px] cursor-pointer'>
          <img src={ggPlay} alt='' className='h-[100%]' />
        </div>
      </div>
      <div></div>
    </Box>
  );
};

export default DownloadApp;
