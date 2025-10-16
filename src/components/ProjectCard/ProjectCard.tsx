import { Typography, styled, Box } from "@mui/material";
import StyledButton from "../StyledButton/StyledButton";

export interface ProjectCardProps {
    title: string;
    subtitle: string;
    srcImg: string;
    description: string
    technologies: string
    websiteURL: string;
    codeURL: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    subtitle,
    srcImg,
    description,
    technologies,
    websiteURL,
    codeURL
}) => {

    const StyledImg = styled("img")(({ theme }) => ({
        width: "100%",
        objectFit: "contain",
        maxHeight: "80vh",
        padding: "10px 0",
        [theme.breakpoints.up('md')]: {
            maxHeight: "45vh",
        },
    }));

    const StyledCard = styled("div")(({ theme }) => ({
        borderRadius: "3px",
        border: `0.5px solid  ${theme.palette.primary.contrastText}`,
        backgroundColor: "transparent",
        color: theme.palette.primary.contrastText,
        padding: "20px",
        '&:hover': {
            backgroundColor: theme.palette.primary.light
        }
    }));

    return (
        <StyledCard>
            <Typography variant="h5">
                {title}
            </Typography>
            <Typography >
                {subtitle}
            </Typography>
            <StyledImg src={srcImg} alt={title} />
            <Typography>
                {description}
            </Typography>
            <Typography fontWeight={600} pt={2}>
                {technologies}
            </Typography>
            <Box display="flex" gap={1} pt={2}>
                <Box sx={{ width: '50%' }}>
                    <StyledButton onClick={() => window.open(websiteURL)}>Meus projetos</StyledButton>
                </Box>
                <Box sx={{ width: '50%' }}>
                    <StyledButton onClick={() => window.open(codeURL)}>Ver Código</StyledButton>
                </Box>
            </Box>
        </StyledCard>
    )
}

export default ProjectCard