import React from 'react';
import { Grid as MuiGrid } from '@mui/material';
import type { GridProps as MuiGridProps } from '@mui/material';

type ResponsiveValue = number | 'auto' | 'grow' | { [breakpoint: string]: number | 'auto' | 'grow' };

interface Grid2Props extends Omit<MuiGridProps, 'item' | 'container'> {
  container?: boolean;
  size?: ResponsiveValue;
}

function mapSize(size: ResponsiveValue | undefined) {
  if (size == null) return {};
  if (typeof size === 'number' || typeof size === 'string') {
    return { xs: size };
  }
  return size as Record<string, any>;
}

const Grid2: React.FC<Grid2Props> = ({ children, container, size, ...rest }) => {
  const sizeProps = mapSize(size);
  if (container) {
    return (
      <MuiGrid container {...rest}>
        {children}
      </MuiGrid>
    );
  }
  return (
    // Render as item with mapped size props
    // @ts-ignore - spread size props into MuiGrid
    <MuiGrid item {...sizeProps} {...rest}>
      {children}
    </MuiGrid>
  );
};

export default Grid2;
