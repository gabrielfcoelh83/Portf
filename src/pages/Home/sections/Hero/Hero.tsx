import styled from "@emotion/styled"
import Avatar from "../../../../assets/images/avatar.png"
import { Container, Typography, Grid, Button } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {

    const StyledHero = styled("div")(()=> ({
        backgroundColor: "black",
        height: "100vh",
    }))

    const StyledImg = styled("img")(()=> ({
        width: "100%",
        borderRadius: "50%"
    }))

  return (
    <>
        <StyledHero>
            <Container> 
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <StyledImg src={Avatar} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Typography color="primary" variant="h1" textAlign="center">Gabriel Coelho</Typography>
                        <Typography color="primary" variant="h2" textAlign="center">Desenvolvedor Full-stack</Typography>
                        <Grid container display="flex" justifyContent="center">
                            <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                <Button>
                                    <DownloadIcon />
                                    Download CV
                                </Button>
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                <Button>
                                    <EmailIcon />
                                    Contato
                                </Button>
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