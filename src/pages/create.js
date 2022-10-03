import {
  Box,
  Button,
  Card,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();
  return (
    <Box component={'div'} className='create'>
      <Typography variant='h5' textAlign={'center'} sx={{ pt: 5 }}>
        Create event
      </Typography>
      <Card className='create-card'>
        <Typography
          variant='body2'
          textAlign={'center'}
          sx={{ pt: 5, color: '#ccc' }}
        >
          Enter details to create event
        </Typography>
        <form noValidate autoComplete='off' style={{ marginTop: '1rem' }}>
          <Container>
            <div style={{ margin: '1rem' }}>
              <TextField
                id='outlined-basic'
                type={'text'}
                label='Event Name'
                variant='outlined'
                fullWidth
                className='form-field'
              />
            </div>
            <div style={{ margin: '1rem' }}>
              <TextField
                id='outlined-basic'
                type={'text'}
                label='Host Name'
                variant='outlined'
                fullWidth
                className='form-field'
              />
            </div>
            <div style={{ margin: '1rem' }}>
              <TextField
                id='outlined-basic'
                type={'date'}
                variant='outlined'
                fullWidth
                helperText='Event start date'
                className='form-field'
              />
            </div>
            <div style={{ margin: '1rem' }}>
              <TextField
                id='outlined-basic'
                type={'date'}
                variant='outlined'
                fullWidth
                helperText='Event end date'
                className='form-field'
              />
            </div>
            <div style={{ margin: '1rem' }}>
              <TextField
                id='outlined-basic'
                type={'text'}
                label='Location'
                variant='outlined'
                fullWidth
                className='form-field'
              />
            </div>
            <div style={{ margin: '1rem' }}>
              <TextField
                id='outlined-basic'
                type={'text'}
                label='Photo'
                variant='outlined'
                fullWidth
                className='form-field'
              />
              <input
                accept='images/*'
                id='raised-button-file'
                multiple
                name='image'
                type='file'
                hidden
              />
              <label htmlFor='raised-button-file'>
                <Button
                  variant='text'
                  component='span'
                  color='secondary'
                  //  className={classes.field}
                  style={{ textTransform: 'inherit' }}
                >
                  Select image
                </Button>
              </label>
            </div>
            <div
              style={{
                marginTop: '1rem',
                marginBottom: '3rem',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Button
                variant='contained'
                color='primary'
                // fullWidth
                onClick={() => navigate('/event')}
                sx={{ textTransform: 'inherit' }}
              >
                Create
              </Button>
            </div>
          </Container>
        </form>
      </Card>
    </Box>
  );
};

export default Create;
