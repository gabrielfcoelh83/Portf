import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

interface TypewriterProps {
  text: string;
  delay?: number;
  variant?: any;
  color?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, delay = 100, variant = 'h3', color }) => {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplay((prev) => prev + text[i]);
      i += 1;
      if (i >= text.length) clearInterval(timer);
    }, delay);
    return () => clearInterval(timer);
  }, [text, delay]);

  return (
    <Typography variant={variant} color={color} textAlign="center">
      {display}
    </Typography>
  );
};

export default Typewriter;
