import { Box } from '@mui/system';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import image from '../../../../assets/img/154000-1-vc-medlatec.png';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import './style.css';

const Slideshow = () => {
  return (
    <Box component='div' className='bg-white flex justify-center pt-[30px]'>
      <div className='slide-container max-w-[65%] nav-none'>
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
          <div className='p-[20px] text-[13px]'>
            <img className='rounded-[15px]' src={image} alt='' />
            <div className='font-bold mt-[10px] mb-[12px]'>
              Xét nghiệm COVID
            </div>
            <div>
              Giải pháp chuyển đổi số BookingCare DX ứng dụng công nghệ tiên
              phong được phát triển theo mô hình Nền tảng như một dịch vụ.
            </div>
            <div className='cursor-pointer text-[aqua] uppercase mt-[12px] font-bold text-[#00c7d1] flex items-center'>
              View details
              <NavigateNextIcon />
            </div>
          </div>
          <div className='p-[20px] text-[13px]'>
            <img className='rounded-[15px]' src={image} alt='' />
            <div className='font-bold mt-[10px] mb-[12px]'>
              Xét nghiệm COVID
            </div>
            <div>
              Giải pháp chuyển đổi số BookingCare DX ứng dụng công nghệ tiên
              phong được phát triển theo mô hình Nền tảng như một dịch vụ.
            </div>
            <div className='cursor-pointer text-[aqua] uppercase mt-[12px] font-bold text-[#00c7d1] flex items-center'>
              View details
              <NavigateNextIcon />
            </div>
          </div>
          <div className='p-[20px] text-[13px]'>
            <img className='rounded-[15px]' src={image} alt='' />
            <div className='font-bold mt-[10px] mb-[12px]'>
              Xét nghiệm COVID
            </div>
            <div>
              Giải pháp chuyển đổi số BookingCare DX ứng dụng công nghệ tiên
              phong được phát triển theo mô hình Nền tảng như một dịch vụ.
            </div>
            <div className='cursor-pointer text-[aqua] uppercase mt-[12px] font-bold text-[#00c7d1] flex items-center'>
              View details
              <NavigateNextIcon />
            </div>
          </div>
          <div className='p-[20px] text-[13px]'>
            <img className='rounded-[15px]' src={image} alt='' />
            <div className='font-bold mt-[10px] mb-[12px]'>
              Xét nghiệm COVID
            </div>
            <div>
              Giải pháp chuyển đổi số BookingCare DX ứng dụng công nghệ tiên
              phong được phát triển theo mô hình Nền tảng như một dịch vụ.
            </div>
            <div className='cursor-pointer text-[aqua] uppercase mt-[12px] font-bold text-[#00c7d1] flex items-center'>
              View details
              <NavigateNextIcon />
            </div>
          </div>
          <div className='p-[20px] text-[13px]'>
            <img className='rounded-[15px]' src={image} alt='' />
            <div className='font-bold mt-[10px] mb-[12px]'>
              Xét nghiệm COVID
            </div>
            <div>
              Giải pháp chuyển đổi số BookingCare DX ứng dụng công nghệ tiên
              phong được phát triển theo mô hình Nền tảng như một dịch vụ.
            </div>
            <div className='cursor-pointer text-[aqua] uppercase mt-[12px] font-bold text-[#00c7d1] flex items-center'>
              View details
              <NavigateNextIcon />
            </div>
          </div>
          <div className='p-[20px] text-[13px]'>
            <img className='rounded-[15px]' src={image} alt='' />
            <div className='font-bold mt-[10px] mb-[12px]'>
              Xét nghiệm COVID
            </div>
            <div>
              Giải pháp chuyển đổi số BookingCare DX ứng dụng công nghệ tiên
              phong được phát triển theo mô hình Nền tảng như một dịch vụ.
            </div>
            <div className='cursor-pointer text-[aqua] uppercase mt-[12px] font-bold text-[#00c7d1] flex items-center'>
              View details
              <NavigateNextIcon />
            </div>
          </div>
        </Slide>
      </div>
    </Box>
  );
};

export default Slideshow;
