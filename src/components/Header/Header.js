import { AppBar, Button, Typography, Toolbar, Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
    return (
        <AppBar
            position="static"
            component="nav"
            sx={{
                height: "100px",
            }}
        >
            <Toolbar>
                <Typography
                    component={Link}
                    to="/"
                    variant="h2"
                    sx={{
                        height: "100%",
                        lineHeight: "100px",
                        flexGrow: 1,
                        paddingLeft: "10%",
                        textDecoration: "none",
                    }}
                >
                    kenzie's copy
                </Typography>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    paddingRight="10%"
                >
                    <Button
                        component={Link}
                        to="/portfolio"
                        variant="contained"
                        color="secondary"
                    >
                        Portfolio
                    </Button>
                    <Button
                        component={Link}
                        to="/about"
                        variant="contained"
                        color="secondary"
                    >
                        About
                    </Button>
                    <Button
                        component={Link}
                        to="/process"
                        variant="contained"
                        color="secondary"
                    >
                        Process
                    </Button>
                    <Button
                        component={Link}
                        to="/contact"
                        variant="contained"
                        color="secondary"
                    >
                        Contact
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
