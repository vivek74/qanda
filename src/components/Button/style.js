import styled from 'styled-components';

export const StyledButton = styled.button`
    padding: 20px;
    min-width:15%;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    background-color: ${({ disabled }) => disabled ? '#696969' : '#007FFF'};
    color: #ffff;
    cursor: pointer;
    :hover {
        background-color: ${({ disabled }) => disabled ? '#696969' : '#0066b2'};
    }
`
export const Wrapper = styled.div`
    text-align: center;
`