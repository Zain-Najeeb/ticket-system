import React from 'react';
import { Box, Typography } from '@mui/material';
import './requestCard.css';

interface RequestCardProps {
  title: string;
  description: string;
}

function RequestCard({ title, description }: RequestCardProps) {
  return (
    <Box
      className="requestCard"
      sx={{
        height: '10vh',
        width: '100%',
        backgroundColor: 'beige',
        borderBottom: '1px solid',
        borderBottomColor: 'footer.main',
      }}
    >
      <Box
        className="items"
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
        }}
      >
        <Box
          className="logo"
          sx={{
            width: '10%',
            height: '100%',
            backgroundColor: 'transparent',
          }}
        >
          {/* Placeholder for logo */}
        </Box>
        <Box
          className="card-content"
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            className="card-content-header"
            sx={{
              height: '50%',
              display: 'flex',
              alignItems: 'center',
              px: 1,
            }}
          >
            <Typography variant="h6" component="span">
              {title}
            </Typography>
          </Box>
          <Box
            className="card-content-footer"
            sx={{
              marginTop: 'auto',
              paddingBottom: 1,
              px: 1,
            }}
          >
            <Typography variant="body2" component="span" sx={{ color: 'footer.main' }}>
              {description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default RequestCard;
