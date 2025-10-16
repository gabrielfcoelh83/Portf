import { Box, Card, Container, Typography, styled } from "@mui/material"
import Grid from '../../../../components/Grid2/Grid2'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const About: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }));

    const skillsSet = [
        "Javascript", "Typescript", "React", "Next", "Git", "HTML", "CSS", "AWS", "Material UI", "Figma", "Python"
    ]

    return (
        <>
            <Container maxWidth="lg">
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h2" textAlign="center" >Sobre mim</Typography>
                </Box>
                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                    <Grid size={{ xs: 9, md: 3 }}>
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <WorkspacePremiumIcon />
                                <Typography textAlign="center" fontWeight={600}>Experiência</Typography>
                                <Typography textAlign="center">3+ anos</Typography>
                                <Typography textAlign="center">Desenvolvimento Frontend | Analista de Sistemas</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                    <Grid size={{ xs: 9, md: 3 }}>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Educação</Typography>
                                <Typography textAlign="center">Graduação</Typography>
                                <Typography textAlign="center">Análise e Desenvolvimento de Sistemas</Typography>
                            </StyledCard>
                        </AnimationComponent>

                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography>
                        Sou Gabriel Coelho, desenvolvedor junior em transição de carreira para o desenvolvimento de software, com mais de 3 anos de experiência em suporte de TI, infraestrutura e administração de sistemas. Formado em Análise e Desenvolvimento de Sistemas, possuo sólidos conhecimentos em Python, JavaScript, SQL e Linux.
                        Tenho experiência prática no desenvolvimento de APIs REST, automação de processos e projetos full-stack utilizando React.js, Vue.js, Flask e Django. Atuo monitorando servidores Linux, desenvolvendo scripts Bash para automação, e realizando manutenção de componentes front-end em ambientes ágeis como Scrum e Kanban.
                        Sou apaixonado por tecnologia e resolução de problemas, com perfil colaborativo e foco em entregas incrementais, 
                        além de facilidade para trabalhar em equipes multidisciplinares, buscando sempre evoluir técnicamente e entregar soluções de qualidade.
                    </Typography>
                </Box>
                <hr />
                <Box id="skills" pt={1} mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Skills</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid key={index} size={{ xs: 5, sm: 4, md: 2, lg: 2 }}>
                                <StyledCard variant="outlined">
                                    {skill}
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default About