import React from 'react';
import { noop } from 'lodash';
import { Button as DefaultButton } from '@material-ui/core';

export const Button = ({
    text = 'Default',
    color = 'primary',
    size = 'medium',
    onClick = noop,
    variant = 'contained'
}) => (
    <DefaultButton
        color={color}
        size={size}
        onClick={onClick}
        variant={variant}
        children={text}
    />
);

export default Button;