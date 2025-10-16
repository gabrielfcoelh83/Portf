import { AppBar, MenuItem, Toolbar } from "@mui/material"
import { styled } from "@mui/material/styles"


const NavBar = () => {
    const StyledToolbar = styled(Toolbar)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-evenly",
    }));

    return (
        <>
            <AppBar position="relative">
                <StyledToolbar>
            <MenuItem>About</MenuItem>
            <MenuItem>Skills</MenuItem>
            <MenuItem>Projects</MenuItem>
            </StyledToolbar>
        </AppBar>
    </>
  )
}

export default NavBar