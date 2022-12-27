import { Box } from '@mui/material';
import React from 'react';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import MailIcon from '@mui/icons-material/Mail';
import { fb, youtube, twitter, linkedIn } from '../../../../assets/img';

const Footer = () => {
  return (
    <Box component='div' className='bg-white py-[34px] flex justify-center'>
      <div className='flex justify-around w-[80%]'>
        <Box component='div' className=''>
          <div></div>
          <ul>
            <li className='flex mb-[12px] items-center'>
              <div className='w-[34px] h-[34px] flex items-center justify-center border-[1px] border-[#099cbd6b] rounded-[50%]'>
                <MailIcon sx={{ color: '#099cbdd1', width: '16px' }} />
              </div>
              <div className='font-medium mr-[8px] ml-[8px]'>Email: </div>
              <div className='hover:text-[#097c9f]'>contact@teleappoint.vn</div>
            </li>
            <li className='flex mb-[12px] items-center'>
              <div className='w-[34px] h-[34px] flex items-center justify-center border-[1px] border-[#099cbd6b] rounded-[50%]'>
                <AddIcCallIcon sx={{ color: '#099cbdd1', width: '16px' }} />
              </div>
              <div className='font-medium mr-[8px] ml-[8px]'>Hotline: </div>
              <div className='hover:text-[#097c9f]'>033.8523.969</div>
            </li>
            <li className='flex mb-[12px] items-center'>
              <div className='w-[34px] h-[34px] flex items-center justify-center border-[1px] border-[#099cbd6b] rounded-[50%]'>
                <AddLocationAltIcon
                  sx={{ color: '#099cbdd1', width: '16px' }}
                />
              </div>
              <div className='font-medium mr-[8px] ml-[8px]'>Address: </div>
              <div className='hover:text-[#097c9f]'>
                28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội
              </div>
            </li>
          </ul>
        </Box>
        <Box component='div' className=''>
          <div className='font-bold mb-[16px] text-[18px]'>About us</div>
          <ul>
            <li className='mb-[10px] font-medium hover:text-[#097c9f] cursor-pointer'>
              Trang chủ
            </li>
            <li className='mb-[10px] font-medium hover:text-[#097c9f] cursor-pointer '>
              Chuyên khoa
            </li>
            <li className='mb-[10px] font-medium hover:text-[#097c9f] cursor-pointer'>
              Bác sĩ
            </li>
            <li className='mb-[10px] font-medium hover:text-[#097c9f] cursor-pointer'>
              Gói khám
            </li>
            <li className='mb-[10px] font-medium hover:text-[#097c9f] cursor-pointer'>
              Liên hệ hợp tác
            </li>
            <li className='mb-[10px] font-medium hover:text-[#097c9f] cursor-pointer'>
              Câu hỏi thường gặp
            </li>
          </ul>
        </Box>
        <Box component='div' className=''>
          <div className='mb-[16px]'>
            <div className='font-bold text-[18px]'>Follow us</div>
          </div>
          <ul>
            <li className='flex items-center mb-[12px]'>
              <div>
                <img src={fb} alt='' className='w-[24px] mr-[8px]' />
              </div>
              <div className='hover:text-[#097c9f] cursor-pointer'>
                Facebook
              </div>
            </li>
            <li className='flex items-center mb-[12px]'>
              <div>
                <img src={youtube} alt='' className='w-[24px] mr-[8px]' />
              </div>
              <div className='hover:text-[#097c9f] cursor-pointer'>Youtube</div>
            </li>
            <li className='flex items-center mb-[12px]'>
              <div>
                <img src={twitter} alt='' className='w-[24px] mr-[8px]' />
              </div>
              <div className='hover:text-[#097c9f] cursor-pointer'>Twitter</div>
            </li>
            <li className='flex items-center mb-[12px]'>
              <div>
                <img src={linkedIn} alt='' className='w-[24px] mr-[8px]' />
              </div>
              <div className='hover:text-[#097c9f] cursor-pointer'>Linked</div>
            </li>
          </ul>
        </Box>
      </div>
    </Box>
  );
};

export default Footer;
