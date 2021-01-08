import React from 'react';
import { StyledButton, Wrapper } from './style';

export default function Button({ children, onClick, disabled }) {
    return (
        <Wrapper>
            <StyledButton disabled={disabled} onClick={onClick}>{children}</StyledButton>
        </Wrapper>
    )
}