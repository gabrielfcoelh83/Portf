import styled from "@emotion/styled"
import Avatar from "../../../../assets/images/avatar.png"
import { Container, Typography, Grid, Box } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";
import { AnimatedBackground } from "../../../../components/AnimatedBackgroud/AnimatedBackground";



const Hero = () => {

    

      const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
    }))

    const StyledImg = styled("img")(()=> ({
        width: "80%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }))

  return (
    <>
        <StyledHero>
            <Container> 
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 5 }}>
                            <Box position="relative">
                                <Box position="absolute" width={"100%" } top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position={"absolute"}>
                                    <StyledImg src={Avatar} />
                                </Box>
                            </Box>
                        
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Gabriel Coelho</Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center">Desenvolvedor Full-stack</Typography>
                        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                            <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                <StyledButton>
                                    <DownloadIcon />
                                   <Typography>Download CV</Typography>
                                </StyledButton>
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                <StyledButton>
                                    <EmailIcon />
                                    <Typography>Contato</Typography>
                                </StyledButton>
                            </Grid>
                        </Grid>
               
                
            </Grid>
           </Grid>
            </Container>
           
        </StyledHero>
    </>
  )
}

export default Hero