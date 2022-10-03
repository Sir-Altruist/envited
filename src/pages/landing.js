import React, { useState, useEffect } from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { landing } from '../assets';
import { Tab } from '../components';
import { useNavigate } from 'react-router-dom';

// import './landing.css';

const Landing = () => {
  const [mobile, setMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const responsive = () => {
      return window.innerWidth < 960 ? setMobile(true) : setMobile(false);
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
              <img
                src={landing}
                alt='background'
                width={'440px'}
                height={'600px'}
              />
            </Grid>
            <Grid item md={5}>
              <Box sx={{ marginLeft: '5rem' }} className='content'>
                <Typography
                  variant='h2'
                  textAlign={'right'}
                  sx={{
                    paddingTop: '150px',
                    color: '#240D57',
                    fontWeight: 'bold',
                    fontSize: '64px',
                  }}
                  //   gutterBottom={1}
                >
                  Imagine if <br /> <span className='snapchat'>Snapchat </span>
                  <br /> had events
                </Typography>
                <Typography
                  variant='body1'
                  color={'textSecondary'}
                  textAlign='right'
                  sx={{ pt: 0.5 }}
                >
                  Easily host and share event with your friends across any
                  social media
                </Typography>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'right',
                    marginTop: '3rem',
                  }}
                >
                  <Button
                    variant='contained'
                    className={'btn'}
                    onClick={() => navigate('/create')}
                  >
                    🎉 Create my event
                  </Button>
                </div>
              </Box>
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
        <Box>
          <Typography
            variant='h2'
            textAlign={'center'}
            sx={{
              paddingTop: '50px',
              color: '#240D57',
              fontWeight: 'bold',
              fontSize: '64px',
            }}
            //   gutterBottom={1}
          >
            Imagine if <br /> <span className='snapchat'>Snapchat </span>
            <br /> had events
          </Typography>
          <Typography
            variant='body1'
            color={'textSecondary'}
            textAlign='center'
            sx={{ pt: 0.5 }}
          >
            Easily host and share event with your friends across any social
            media
          </Typography>
        </Box>
        <img
          src={landing}
          alt='background'
          // width={'440px'}
          height={'600px'}
          style={{ margin: '2rem auto 1rem' }}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            variant='contained'
            className={'btn'}
            onClick={() => navigate('/create')}
          >
            🎉 Create my event
          </Button>
        </div>
        {/* </Container> */}
        {/* Tab Section */}
        <Tab />
        {/* End of Tab Section */}
      </Box>
    );
  };
  return <Box className='landing'>{mobile ? mobileView() : desktopView()}</Box>;
};

export default Landing;
