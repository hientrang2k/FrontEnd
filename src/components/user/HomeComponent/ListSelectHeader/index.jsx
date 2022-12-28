import React from 'react';
import { Box } from '@mui/material';
import i18n from '../../../../translations';
import '../../HomePage/style.css';
import {
  chuyenkhoa,
  xetnghiem,
  nhakhoa,
  tainha,
  tongquat,
  phauthuat,
  suckhoeDN,
  tuxa,
  trinao,
} from '../../../../assets/img-header';

const ListSelectHeader = () => {
  return (
    <Box
      component='div'
      className='bgr-gradient pt-[50px] flex justify-center  '
    >
      <Box component='div' className='flex justify-around w-[80%]'>
        <Box
          component='div'
          className='flex flex-col items-center hover:text-[#15d1c8] cursor-pointer'
        >
          <div className='w-[50px] h-[50px] bg-white items-center justify-center flex rounded-[50%] shadow-[0px_1px_2px_rgba(0,0,0,0.5)] hover:mt-[-4px] hover:duration-300 hover:shadow-[0px_20px_20px_rgba(21,209,200,0.13)]'>
            <img alt='' src={chuyenkhoa} className='w-[34px] ' />
          </div>
          <div className='font-medium'>{i18n.t('header.listSelect.item1')}</div>
          <div className='font-medium'>
            {i18n.t('header.listSelect.sub-item1')}
          </div>
        </Box>
        <Box
          component='div'
          className='flex flex-col items-center hover:text-[#15d1c8] cursor-pointer hover:plan__content--item'
        >
          <div className='w-[50px] h-[50px] bg-white items-center justify-center flex rounded-[50%] shadow-[0px_1px_2px_rgba(0,0,0,0.5)] hover:mt-[-4px] hover:duration-300 hover:shadow-[0px_20px_20px_rgba(21,209,200,0.13)]'>
            <img alt='' src={tuxa} className='w-[34px]' />
          </div>
          <div className='font-medium'>{i18n.t('header.listSelect.item2')}</div>
          <div className='font-medium'>
            {i18n.t('header.listSelect.sub-item2')}
          </div>
        </Box>
        <Box
          component='div'
          className='flex flex-col items-center hover:text-[#15d1c8] cursor-pointer'
        >
          <div className='w-[50px] h-[50px] bg-white items-center justify-center flex rounded-[50%] shadow-[0px_1px_2px_rgba(0,0,0,0.5)] hover:mt-[-4px] hover:duration-300 hover:shadow-[0px_20px_20px_rgba(21,209,200,0.13)]'>
            <img alt='' src={tongquat} className='w-[34px]' />
          </div>
          <div className='font-medium'>{i18n.t('header.listSelect.item3')}</div>
          <div className='font-medium'>
            {i18n.t('header.listSelect.sub-item3')}
          </div>
        </Box>
        <Box
          component='div'
          className='flex flex-col items-center hover:text-[#15d1c8] cursor-pointer'
        >
          <div className='w-[50px] h-[50px] bg-white items-center justify-center flex rounded-[50%] shadow-[0px_1px_2px_rgba(0,0,0,0.5)] hover:mt-[-4px] hover:duration-300 hover:shadow-[0px_20px_20px_rgba(21,209,200,0.13)]'>
            <img alt='' src={xetnghiem} className='w-[34px]' />
          </div>
          <div className='font-medium'>{i18n.t('header.listSelect.item4')}</div>
          <div className='font-medium'>
            {i18n.t('header.listSelect.sub-item4')}
          </div>
        </Box>
        <Box
          component='div'
          className='flex flex-col items-center hover:text-[#15d1c8] cursor-pointer'
        >
          <div className='w-[50px] h-[50px] bg-white items-center justify-center flex rounded-[50%] shadow-[0px_1px_2px_rgba(0,0,0,0.5)] hover:mt-[-4px] hover:duration-300 hover:shadow-[0px_20px_20px_rgba(21,209,200,0.13)]'>
            <img alt='' src={trinao} className='w-[34px]' />
          </div>
          <div className='font-medium'>{i18n.t('header.listSelect.item5')}</div>
          <div className='font-medium'>
            {i18n.t('header.listSelect.sub-item5')}
          </div>
        </Box>
        <Box
          component='div'
          className='flex flex-col items-center hover:text-[#15d1c8] cursor-pointer'
        >
          <div className='w-[50px] h-[50px] bg-white items-center justify-center flex rounded-[50%] shadow-[0px_1px_2px_rgba(0,0,0,0.5)] hover:mt-[-4px] hover:duration-300 hover:shadow-[0px_20px_20px_rgba(21,209,200,0.13)]'>
            <img alt='' src={nhakhoa} className='w-[34px]' />
          </div>
          <div className='font-medium'>{i18n.t('header.listSelect.item6')}</div>
          <div className='font-medium'>
            {i18n.t('header.listSelect.sub-item6')}
          </div>
        </Box>
        <Box
          component='div'
          className='flex flex-col items-center hover:text-[#15d1c8] cursor-pointer'
        >
          <div className='w-[50px] h-[50px] bg-white items-center justify-center flex rounded-[50%] shadow-[0px_1px_2px_rgba(0,0,0,0.5)] hover:mt-[-4px] hover:duration-300 hover:shadow-[0px_20px_20px_rgba(21,209,200,0.13)]'>
            <img alt='' src={phauthuat} className='w-[34px]' />
          </div>
          <div className='font-medium'>{i18n.t('header.listSelect.item7')}</div>
          <div className='font-medium'>
            {i18n.t('header.listSelect.sub-item7')}
          </div>
        </Box>
        <Box
          component='div'
          className='flex flex-col items-center hover:text-[#15d1c8] cursor-pointer'
        >
          <div className='w-[50px] h-[50px] bg-white items-center justify-center flex rounded-[50%] shadow-[0px_1px_2px_rgba(0,0,0,0.5)] hover:mt-[-4px] hover:duration-300 hover:shadow-[0px_20px_20px_rgba(21,209,200,0.13)]'>
            <img alt='' src={tainha} className='w-[34px]' />
          </div>
          <div className='font-medium'>{i18n.t('header.listSelect.item8')}</div>
          <div className='font-medium'>
            {i18n.t('header.listSelect.sub-item8')}
          </div>
        </Box>
        <Box
          component='div'
          className='flex flex-col items-center hover:text-[#15d1c8] cursor-pointer'
        >
          <div className='w-[50px] h-[50px] bg-white items-center justify-center flex rounded-[50%] shadow-[0px_1px_2px_rgba(0,0,0,0.5)] hover:mt-[-4px] hover:duration-300 hover:shadow-[0px_20px_20px_rgba(21,209,200,0.13)]'>
            <img alt='' src={suckhoeDN} className='w-[34px]' />
          </div>
          <div className='font-medium'>{i18n.t('header.listSelect.item9')}</div>
          <div className='font-medium'>
            {i18n.t('header.listSelect.sub-item9')}
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default ListSelectHeader;
