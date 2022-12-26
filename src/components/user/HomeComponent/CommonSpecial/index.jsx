import React from 'react';
import { Box, InputBase, IconButton, Paper } from '@mui/material';
import i18n from '../../../../translations';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import image from '../../../../assets/img/xuong-khop.jpg';

const CommonSpecial = () => {
  return (
    <Box component='div' className='flex justify-center py-[30px] bg-white'>
      <div className='max-w-[65%] flex flex-col'>
        <div className='flex justify-between my-[8px]'>
          <div className='font-medium text-[24px]'>
            {i18n.t('commonSpecial.title')}
          </div>
          <div className='px-[20px] py-[10px] bg-[#95edf15c] text-[#056c70] hover:bg-[#94dcdf] rounded-[8px] cursor-pointer'>
            {i18n.t('commonSpecial.viewMore')}
          </div>
        </div>
        <div className='slide-container slide-dot'>
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
            <div className='p-[20px] text-[14px]'>
              <img className='rounded-[8px]' src={image} alt='' />
              <div className='mt-[12px]'>Tư vấn, trị liệu tâm lý từ xa</div>
            </div>
            <div className='p-[20px] text-[14px]'>
              <img className='rounded-[8px]' src={image} alt='' />
              <div className='mt-[12px]'>Tư vấn, trị liệu tâm lý từ xa</div>
            </div>
            <div className='p-[20px] text-[14px]'>
              <img className='rounded-[8px]' src={image} alt='' />
              <div className='mt-[12px]'>Tư vấn, trị liệu tâm lý từ xa</div>
            </div>
            <div className='p-[20px] text-[14px]'>
              <img className='rounded-[8px]' src={image} alt='' />
              <div className='mt-[12px]'>Tư vấn, trị liệu tâm lý từ xa</div>
            </div>
            <div className='p-[20px] text-[14px]'>
              <img className='rounded-[8px]' src={image} alt='' />
              <div className='mt-[12px]'>Tư vấn, trị liệu tâm lý từ xa</div>
            </div>
            <div className='p-[20px] text-[14px]'>
              <img className='rounded-[8px]' src={image} alt='' />
              <div className='mt-[12px]'>Tư vấn, trị liệu tâm lý từ xa</div>
            </div>
          </Slide>
        </div>
      </div>
    </Box>
  );
};

export default CommonSpecial;
