import React from 'react';
import { BsLockFill, BsArrowClockwise, BsBook } from 'react-icons/bs';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { BiCopy } from 'react-icons/bi';
import { FiShare } from 'react-icons/fi';
import { Box, Typography } from '@mui/material';

const Tab = () => {
  return (
    <Box component={'div'} className='tab'>
      <div className='search'>
        <div style={{ paddingLeft: '1rem' }}>
          <h6>
            <span>A</span>A
          </h6>
        </div>
        <div>
          <Typography variant='body2'>
            <BsLockFill />
            domain.com
          </Typography>
        </div>
        <div style={{ paddingRight: '1rem' }}>
          <BsArrowClockwise />
        </div>
      </div>
      <div style={{ margin: '1rem auto' }}>
        <div className='icons'>
          <IoIosArrowBack
            color='blue'
            size={'2rem'}
            // style={{ paddingRight: '1rem' }}
          />
          <IoIosArrowForward
            color='#ccc'
            size={'2rem'}
            // style={{ paddingRight: '1rem' }}
          />
          <FiShare
            color='blue'
            size={'2rem'}
            // style={{ paddingRight: '1rem' }}
          />
          <BsBook
            color='blue'
            size={'2rem'}
            // style={{ paddingRight: '1rem' }}
          />
          <BiCopy
            color='blue'
            size={'2rem'}
            // style={{ paddingRight: '1rem' }}
          />
        </div>
      </div>
    </Box>
  );
};

export default Tab;
