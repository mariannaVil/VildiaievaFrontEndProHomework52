import { CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { DescriptionTypography } from '../Card/styled';
import { BaseModalWrapper } from './styled';

const BaseModal = ({
  image, title, description,
}) => (
  <BaseModalWrapper>
      <CardMedia
        sx={{
          height: 150,
          '@media (max-width: 600px)': {
            height: 100,
          },
        }}
        image={image}
        title={title}
        description={description}
      />
    <CardContent>
      <Typography gutterBottom variant='h5' component='div'>
        {title}
      </Typography>
      <DescriptionTypography variant='body2' color='text.secondary'>
        {description}
      </DescriptionTypography>
    </CardContent>
    <Typography>Time Estimate:30 minutes</Typography>
  </BaseModalWrapper>
);
export default BaseModal;
