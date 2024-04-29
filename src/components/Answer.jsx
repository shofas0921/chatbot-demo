import React from 'react';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Answer = (props) => {
  return(
    <Button variant="contained">
      {props.content}
    </Button>
  );
};

export default Answer;
