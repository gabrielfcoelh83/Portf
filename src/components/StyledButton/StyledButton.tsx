import React from 'react';
import { Button, styled } from '@mui/material';
import type { ButtonProps } from '@mui/material';

const Root = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  border: `1px solid ${theme.palette.primary.contrastText}`,
  backgroundColor: 'transparent',
  textTransform: 'none',
  width: '100%',
  padding: theme.spacing(1, 2),
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const StyledButton = React.forwardRef<HTMLButtonElement, ButtonProps>(function StyledButton(props, ref) {
  return <Root ref={ref} {...props} />;
});

export default StyledButton;