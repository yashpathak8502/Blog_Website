
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
    
`;

const Wrapper = styled(Box)`
    padding-top: 5px;
    
    & > h3, & > h5 {
        margin-top: 30px;
        
    }
    & > h3{
        color:white;
        background-color:grey;
        border-radius:30px;
        padding-left:400px;
        color:white;
        background: #3b91e8;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">CONTACT US AND WORK WITH US</Typography>    
                <Typography variant="h5">This is a full stack blog application where user can register login and perform stuffs like creating blogs and posting them also he can read present blogs . </Typography>
            </Wrapper>
        </Box>
    );
}

export default Contact;