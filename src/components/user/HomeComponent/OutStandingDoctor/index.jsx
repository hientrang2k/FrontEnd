import React from 'react';
import { Box, InputBase, IconButton, Paper } from '@mui/material';
import i18n from '../../../../translations';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { bsChung } from '../../../../assets/img';
import './style.css';

const OutStandingDoctor = () => {
  return (
    <Box component='div' className='flex justify-center py-[30px] bg-white'>
      <div className='max-w-[65%] flex flex-col'>
        <div className='flex justify-between my-[8px]'>
          <div className='font-medium text-[24px]'>
            {i18n.t('outstandingDoctor.title')}
          </div>
          <div className='px-[20px] py-[10px] bg-[#95edf15c] text-[#056c70] hover:bg-[#94dcdf] rounded-[8px] cursor-pointer'>
            {i18n.t('outstandingDoctor.viewMore')}
          </div>
        </div>
        <div className='slide-container mt-[20px] slide-dot'>
          <Slide
            slidesToScroll={1}
            slidesToShow={1}
            indicators={true}
            autoplay={false}
            responsive={[
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                },
              },
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                },
              },
            ]}
          >
            <div className='cursor-pointer p-[10px] text-[15px] flex flex-col justify-center items-center h-[260px] doctor-border mr-[8px] ml-[8px]'>
              <div className='w-[120px]'>
                <img className='rounded-[50%]' src={bsChung} alt='' />
              </div>
              <div className='mt-[12px]  hover:text-[#15d1c8] text-center'>
                Phó GS, Tiến sĩ, Bác sĩ cao cấp Vũ Duy Hưng
              </div>
              <div className='text-[14px] mb-[40px]'>
                Tư vấn, trị liệu tâm lý từ xa
              </div>
            </div>
            <div className='cursor-pointer p-[10px] text-[15px] flex flex-col justify-center items-center h-[260px] doctor-border mr-[8px] ml-[8px]'>
              <div className='w-[120px]'>
                <img className='rounded-[50%]' src={bsChung} alt='' />
              </div>
              <div className='mt-[12px]  hover:text-[#15d1c8] text-center'>
                Phó GS, Tiến sĩ, Bác sĩ cao cấp Vũ Duy Hưng
              </div>
              <div className='text-[14px] mb-[40px]'>
                Tư vấn, trị liệu tâm lý từ xa
              </div>
            </div>
            <div className='cursor-pointer p-[10px] text-[15px] flex flex-col justify-center items-center h-[260px] doctor-border mr-[8px] ml-[8px]'>
              <div className='w-[120px]'>
                <img className='rounded-[50%]' src={bsChung} alt='' />
              </div>
              <div className='mt-[12px]  hover:text-[#15d1c8] text-center'>
                Phó GS, Tiến sĩ, Bác sĩ cao cấp Vũ Duy Hưng
              </div>
              <div className='text-[14px] mb-[40px]'>
                Tư vấn, trị liệu tâm lý từ xa
              </div>
            </div>
            <div className='cursor-pointer p-[10px] text-[15px] flex flex-col justify-center items-center h-[260px] doctor-border mr-[8px] ml-[8px]'>
              <div className='w-[120px]'>
                <img className='rounded-[50%]' src={bsChung} alt='' />
              </div>
              <div className='mt-[12px]  hover:text-[#15d1c8] text-center'>
                Phó GS, Tiến sĩ, Bác sĩ cao cấp Vũ Duy Hưng
              </div>
              <div className='text-[14px] mb-[40px]'>
                Tư vấn, trị liệu tâm lý từ xa
              </div>
            </div>
            <div className='cursor-pointer p-[10px] text-[15px] flex flex-col justify-center items-center h-[260px] doctor-border mr-[8px] ml-[8px]'>
              <div className='w-[120px]'>
                <img className='rounded-[50%]' src={bsChung} alt='' />
              </div>
              <div className='mt-[12px]  hover:text-[#15d1c8] text-center'>
                Phó GS, Tiến sĩ, Bác sĩ cao cấp Vũ Duy Hưng
              </div>
              <div className='text-[14px] mb-[40px]'>
                Tư vấn, trị liệu tâm lý từ xa
              </div>
            </div>
            <div className='cursor-pointer p-[10px] text-[15px] flex flex-col justify-center items-center h-[260px] doctor-border mr-[8px] ml-[8px]'>
              <div className='w-[120px]'>
                <img className='rounded-[50%]' src={bsChung} alt='' />
              </div>
              <div className='mt-[12px]  hover:text-[#15d1c8] text-center'>
                Phó GS, Tiến sĩ, Bác sĩ cao cấp Vũ Duy Hưng
              </div>
              <div className='text-[14px] mb-[40px]'>
                Tư vấn, trị liệu tâm lý từ xa
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </Box>
  );
};

export default OutStandingDoctor;
