import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import RequestCard from '../requestCard/requestCard';
import RequestCardVisability from '../../hooks/requestCardVisability';
import './requestCardHeader.css';

interface RequestCardChildProps {
  title: string;
  description: string;
}

interface RequestCardHeaderProps {
  title: string;
  description: string;
  children: RequestCardChildProps[];
}

function RequestCardHeader({ title, description, children }: RequestCardHeaderProps) {
  const [isVisible, toggleVisibility] = RequestCardVisability(false);

  return (
    <>
      <Box
        className="card"
        sx={{
          height: '11%',
          width: '100%',
          display: 'flex',
          backgroundColor: 'primary.main',
          boxShadow: 3,
          cursor: 'pointer',
        }}
        onClick={toggleVisibility}
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
          className="adjectives"
          sx={{
            height: '100%',
            width: '60%',
            display: 'flex',
            flexDirection: 'column',
            p: 1,
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: 'white', mb: 1 }}
            className="title"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: 'footer.main' }}
            className="description"
          >
            {description}
          </Typography>
        </Box>
        <Box
          className="arrow"
          sx={{
            flex: 1,
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IconButton
            sx={{ color: 'white' }}
            className={`arrow-icon ${isVisible ? 'chevron-down' : ''}`}
          >
            {isVisible ? <ExpandMore /> : <ExpandLess />}
          </IconButton>
        </Box>
      </Box>

      <Box
        className={`card-container ${isVisible ? 'expanded' : 'collapsed'}`}
      >
        {children.map((child, index) => (
          <RequestCard key={index} title={child.title} description={child.description} />
        ))}
      </Box>
    </>
  );
}

export default RequestCardHeader;
