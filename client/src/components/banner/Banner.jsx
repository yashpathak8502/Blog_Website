
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background-image: url(https://www.wallpapertip.com/wmimgs/171-1717583_photo-wallpaper-white-line-blue-design-color-material.jpg);
    background-position: left 0px bottom 0px;
    background-size: cover;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 80px;
    font-weight: 1000;
    color: #3b91e8;
    background-color:white;
    padding: 10px 150px 10px 100px;
    border-radius: 90px;

`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>BLOG</Heading>
            
        </Image>
    )
}

export default Banner;