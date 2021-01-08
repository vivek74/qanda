import { NavBar, Logo } from './style'
import { Container } from '../../../style'

export default function Header() {
    return (
        <NavBar background="#002D62" color="#ffff">
            <Container>
                <Logo>Topper</Logo>
            </Container>
        </NavBar>
    )
}