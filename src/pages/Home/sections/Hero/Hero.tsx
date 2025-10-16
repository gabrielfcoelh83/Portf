import { Box, Container, Typography, styled } from "@mui/material"
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground"
import Avatar from "../../../../assets/images/avatar.png"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import CV from "../../../../assets/images/pdfs/CV Gabriel-fortes-coelho.pdf"

const HeroSection: React.FC = () => {

    const StyledImg = styled("img")(({ theme }) => ({
        width: "80%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "50%",
        position: "relative"
    }));

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        [theme.breakpoints.up('xs')]: {
            display: "block",
            padding: "20px",
            paddingTop: "100px",
            paddingBottom: "40px",
        },
        [theme.breakpoints.up('md')]: {
            display: "flex",
            alignItems: "center",
            paddingTop: "100px",
            height: "100vh"
        },
    }));

    const handleDownload = () => {
        console.log("download")
        // Create a link element
        const link = document.createElement('a');
        link.href = CV
        link.download = 'example.pdf'; // Set the download attribute to specify the file name
        // Append the link to the body
        document.body.appendChild(link);
        // Trigger the click event
        link.click();
        // Remove the link from the body
        document.body.removeChild(link);
    };

    const handleEmail = () => {
        const emailAddress = 'gabrielfcoelh83@gmail.com';
        const subject = 'Subject';
        const body = 'Hello! I saw your portfolio...';

        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink);
    }

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            gap: 2,
                        }}
                    >
                        <Box sx={{ width: { xs: '100%', md: '41.666%' } }}>
                            <Box position="relative" pb={3}>
                                <Box width={"150%"} position="absolute" top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box textAlign="center">
                                    <StyledImg src={Avatar} />
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ width: { xs: '100%', md: '58.333%' } }}>
                            <Typography color="primary.contrastText" variant="h1" pb={2} textAlign="center">
                                Gabriel Fortes Coelho
                            </Typography>
                            <Typography variant="h2" color="primary.contrastText" pb={2} textAlign="center">
                                Desenvolvedor Full Stack
                            </Typography>
                            <Box mt={3}>
                                <Box display="flex" justifyContent="center" gap={3}>
                                    <Box sx={{ width: { xs: '83%', md: '33.333%' } }}>
                                        <StyledButton onClick={() => handleDownload()}>
                                            <DownloadIcon />
                                            <Typography>
                                                Download CV
                                            </Typography>
                                        </StyledButton>
                                    </Box>
                                    <Box sx={{ width: { xs: '83%', md: '33.333%' } }}>
                                        <StyledButton onClick={() => handleEmail()}>
                                            <EmailIcon />
                                            <Typography>
                                                Contato
                                            </Typography>
                                        </StyledButton>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </StyledHero>
        </>
    )
}

export default HeroSection