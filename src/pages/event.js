import { Box, Card, Container, Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { event } from '../assets';
import { BiCalendar } from 'react-icons/bi';
import { IoIosArrowForward } from 'react-icons/io';
import { Tab } from '../components';

const Event = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const responsive = () => {
      return window.innerWidth <= 960 ? setMobile(true) : setMobile(false);
    };
    responsive();

    window.addEventListener('resize', () => responsive());

    return () => {
      window.removeEventListener('resize', () => responsive());
    };
  }, []);

  const desktopView = () => {
    return (
      <Box>
        <Container>
          <Grid container spacing={1} sx={{ paddingTop: '50px' }}>
            <Grid item md={6}>
              <Box>
                <Typography
                  variant='h2'
                  //   textAlign={'right'}
                  sx={{
                    paddingTop: '100px',
                    color: '#240D57',
                    fontWeight: 'bold',
                    fontSize: '64px',
                  }}
                >
                  Birthday Bash
                </Typography>
                <Typography
                  variant='body2'
                  color={'textSecondary'}
                  //   textAlign='right'
                  sx={{ pt: 0.5 }}
                >
                  Hosted by Elysia
                </Typography>
                <div style={{ marginTop: '3rem' }}>
                  <Box className='event-list'>
                    <div style={{ display: 'flex' }}>
                      <Card className='event-icon'>
                        <BiCalendar
                          color='#8456ec'
                          size={'1.5rem'}
                          // style={{ cursor: 'pointer' }}
                        />
                      </Card>
                      <Typography
                        variant='body1'
                        sx={{ color: '#240D57', fontWeight: 'bold' }}
                      >
                        18 August 6:00pm <br />{' '}
                        <Typography
                          sx={{ color: '#4F4F4F', fontWeight: 'light' }}
                        >
                          to{' '}
                          <span style={{ fontWeight: 'bold' }}>
                            19 August 1:00pm
                          </span>{' '}
                          UTC +10
                        </Typography>
                      </Typography>
                    </div>
                    <IoIosArrowForward size={'2rem'} color={'#bdbdbd'} />
                  </Box>
                  <Box className='event-list'>
                    <div style={{ display: 'flex' }}>
                      <Card className='event-icon'>
                        <BiCalendar
                          color='#8456ec'
                          size={'1.5rem'}
                          // style={{ cursor: 'pointer' }}
                        />
                      </Card>
                      <Typography
                        variant='body1'
                        sx={{ color: '#240D57', fontWeight: 'bold' }}
                      >
                        Street name
                        <Typography
                          sx={{ color: '#4F4F4F', fontWeight: 'light' }}
                        >
                          Suburb, State, Postcode
                        </Typography>
                      </Typography>
                    </div>
                    <IoIosArrowForward size={'2rem'} color={'#bdbdbd'} />
                  </Box>
                </div>
              </Box>
            </Grid>
            <Grid item md={5}>
              <img src={event} alt='event' width={'440px'} height={'600px'} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  };

  const mobileView = () => {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* <Container> */}
        {/* <Grid container spacing={1} sx={{ paddingTop: '50px' }}> */}
        {/* <Grid item md={6}> */}
        <img
          src={event}
          alt='background'
          //   width={'100%'}
          height={'600px'}
          style={{ margin: '2rem auto' }}
        />
        <Box>
          <Typography
            variant='h2'
            //   textAlign={'right'}
            sx={{
              paddingTop: '100px',
              color: '#240D57',
              fontWeight: 'bold',
              fontSize: '64px',
            }}
          >
            Birthday Bash
          </Typography>
          <Typography
            variant='body2'
            color={'textSecondary'}
            //   textAlign='right'
            sx={{ pt: 0.5 }}
          >
            Hosted by Elysia
          </Typography>
          <div style={{ marginTop: '3rem' }}>
            <Box className='event-list'>
              <div style={{ display: 'flex' }}>
                <Card className='event-icon'>
                  <BiCalendar
                    color='#8456ec'
                    size={'1.5rem'}
                    // style={{ cursor: 'pointer' }}
                  />
                </Card>
                <Typography
                  variant='body1'
                  sx={{ color: '#240D57', fontWeight: 'bold' }}
                >
                  18 August 6:00pm <br />{' '}
                  <Typography sx={{ color: '#4F4F4F', fontWeight: 'light' }}>
                    to{' '}
                    <span style={{ fontWeight: 'bold' }}>19 August 1:00pm</span>{' '}
                    UTC +10
                  </Typography>
                </Typography>
              </div>
              <IoIosArrowForward size={'2rem'} color={'#bdbdbd'} />
            </Box>
            <Box className='event-list'>
              <div style={{ display: 'flex' }}>
                <Card className='event-icon'>
                  <BiCalendar
                    color='#8456ec'
                    size={'1.5rem'}
                    // style={{ cursor: 'pointer' }}
                  />
                </Card>
                <Typography
                  variant='body1'
                  sx={{
                    color: '#240D57',
                    fontWeight: 'bold',
                    paddingBottom: '3rem',
                  }}
                >
                  Street name
                  <Typography sx={{ color: '#4F4F4F', fontWeight: 'light' }}>
                    Suburb, State, Postcode
                  </Typography>
                </Typography>
              </div>
              <IoIosArrowForward size={'2rem'} color={'#bdbdbd'} />
            </Box>
          </div>
        </Box>
        {/* </Container> */}
        {/* Tab Section */}
        <Tab />
        {/* End of Tab Section */}
      </Box>
    );
  };

  return <Box className='event'>{mobile ? mobileView() : desktopView()}</Box>;
};

export default Event;
