
import { AppBar, Toolbar, styled, Button } from '@mui/material'; 
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


const Component = styled(AppBar)`
    background: #3b91e8;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    & > a {
        margin:10px;
        padding: 5px 20px;
        color: #000;
        text-decoration: none;
        background-color:white;
        border-radius:15px;
        box-shadow: 0.5px 0.5px 0.5px #3b91e8;
    }
`

const Header = () => {

    const navigate = useNavigate();

    const logout = async () => navigate('/account');
        
    return (
        <Component>
            <Container>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
                <Link to='/account'>LOGOUT</Link>
            </Container>
        </Component>
    )
}

export default Header;