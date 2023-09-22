import './styles.css'
import styled from 'styled-components'

const HeaderContainer = styled.header`
display: flex;
justify-content: space-between;
padding: 1rem;
background-color: ${(props) => props.theme["blue-600"]};

ul {
    list-style: none;
    display: flex;
    gap: 1rem;
}
a {
    padding: 0.5rem 1rem;
    border: 1px solid rgb(240, 236, 245);
    color: rgb(245, 242, 248);
    border-radius: 25px;
}



`
const HeaderRed = styled(HeaderContainer)`
    background-color: ${props => props.theme["red-500"]}
`

export function Header () {
    return(
        <HeaderRed>
            <p>Eventos</p>

            <nav>
                <ul>
                    <li>
                        <a>Meus eventos</a>
                    </li>
                    <li>
                        <a> Crie seu evento</a>
                    </li>
                    <li>
                        <a>Login</a>
                    </li>
                </ul>
            </nav>
        </HeaderRed>
    )
}