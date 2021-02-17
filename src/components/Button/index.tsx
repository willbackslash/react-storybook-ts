import React from 'react';
import { ButtonProps } from './types';
import { CustomButton } from './styles';

export const Button: React.FC<ButtonProps> = ({outline, children, ...rest}) => {
    return <CustomButton outline={outline} {...rest}>{children}</CustomButton>
}