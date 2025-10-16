import { Box, Container, Typography, styled } from "@mui/material";
import Grid from '../../../../components/Grid2/Grid2'
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import type { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const Projects: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "Projeto Brasileirão 2024",
            subtitle: "Jul 2024 - Dez 2024",
            srcImg: "/src/assets/images/brasileirão.png",
            description: "O projeto Brasileirão 2024 é uma aplicação desenvolvida em Python voltada para o gerenciamento e simulação do Campeonato Brasileiro de Futebol, edição 2024. Ele engloba diversas funcionalidades essenciais para quem deseja acompanhar ou analisar o desempenho das equipes e jogadores durante a temporada.",
            technologies: "Technologies: Python, Pandas, Flask, matplotlib",
            websiteURL: "https://github.com/gabrielfcoelh83",
            codeURL: "https://github.com/gabrielfcoelh83/Brasileir-o2024",
        },
        {
            title: "Projeto Twitter",
            subtitle: "Jul 2025 - Dez 2025",
            srcImg: "/src/assets/images/Twitter.png",
            description: "O projeto Projeto-Twitter-Full-stack foi criado com o objetivo de validar conhecimentos em desenvolvimento back end e integrações full stack. Ele simula uma rede social inspirada no Twitter, permitindo construir e experimentar funcionalidades essenciais de plataformas sociais com foco em arquitetura de servidor e banco de dados.",
            technologies: "Technologies: JavaScript, HTML, CSS, React, Python",
            websiteURL: "https://github.com/gabrielfcoelh83",
            codeURL: "https://github.com/gabrielfcoelh83/Projeto-Twitter-Full-stack",
        },
        {
            title: "Projeto Caldeira",
            subtitle: "Jul 2024 - May 2024",
            srcImg: "/src/assets/images/Caldeira.png",
            description: "O projeto Caldeira-projeto-restaurante-express- foi desenvolvido como parte da plataforma de ensino Alura, baseado no projeto do Caldeira. O principal foco é promover o aprendizado prático de desenvolvimento back end utilizando Python, tendo como cenário uma aplicação de restaurante com operações rápidas (\"Express\").",
            technologies: "Technologies: Python",
            websiteURL: "https://github.com/gabrielfcoelh83",
            codeURL: "https://github.com/gabrielfcoelh83/Caldeira-projeto-restaurante-express-",
        },

    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid size={{ md: 6 }} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default Projects