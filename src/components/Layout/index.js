import Header from './Header'
import { Container } from '../../style';
import { Main, Topper } from './style';

export default function Layout({ children }) {
    return (
        <Topper>
            <Header />
            <Main>
                <Container>
                    {children}
                </Container>
            </Main>
        </Topper>
    )
}