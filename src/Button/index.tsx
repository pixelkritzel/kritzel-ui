import React from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label?: string;
  no: number;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  label,
  ...otherProps
}) => (
  <button style={{ border: '5px green solid' }} {...otherProps}>
    {label ?? children}
  </button>
);
