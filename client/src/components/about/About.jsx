
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';



const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;

`;

const Wrapper = styled(Box)`
    padding: 10px;
     & > h5 {
        margin-top: 30px;
    }
    & > h3{
        margin-top: 20px;
        padding-left:350px;
        color:white;
        background: #3b91e8;
        border-radius:30px;
        padding-left:10px
        box-shadow: 0 0 5px solid black;
    }

`;

const Text = styled(Typography)`
 
`;

const About = () => {

    return (
       
        <Box>
            <Banner/>
            <Wrapper>
            <Typography variant="h3">WELCOME TO MY BLOG APPLICATION</Typography>
              <Typography variant="h5">This is a full stack blog application where user can register login and perform stuffs like creating blogs and posting them also he can read present blogs . </Typography>
            </Wrapper>
        </Box>
      
    )
}

export default About;



// <Text variant="h5">I'm a Software Engineer based in India. 
// I've built websites, desktop applications and corporate software.<br />
// If you are interested, you can view some of my favorite projects here
// <Box component="span" style={{ marginLeft: 5 }}>
//     <Link href="https://github.com/kunaltyagi9" color="inherit" target="_blank"><GitHub /></Link>
// </Box>
// </Text>
// <Text variant="h5">
// Need something built or simply want to have chat? Reach out to me on
// <Box component="span" style={{ marginLeft: 5 }}>
//     <Link href="https://www.instagram.com/codeforinterview/" color="inherit" target="_blank">
//         <Instagram />
//     </Link>
// </Box>  
//     or send me an Email 
//     <Link href="mailto:codeforinterview@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
//         <Email />
//     </Link>.
// </Text>