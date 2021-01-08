import styled from 'styled-components';

export const NavBar = styled.div`
    background-color: ${({ background }) => background || `white`};;
    margin: 0;
    position: absolute;
    top: 0;
    width: 100%;
    color: ${({ color }) => color || `black`};
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
`
export const Logo = styled.div`
    font-size: 25px;
    font-weight: bold;
`