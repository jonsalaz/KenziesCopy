import { AppBar, Button, Typography, Toolbar, Box, Stack } from "@mui/material";
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
                    variant="h2"
                    sx={{
                        color: "secondary",
                        height: "100%",
                        lineHeight: "100px",
                        flexGrow: 1,
                        paddingLeft: "10%"
                    }}
                >
                    kenzie's copy
                </Typography>
                <Stack
                    direction="row"
                    justifyContent="center"
                    aligntItems="center"
                    spacing={2}
                    paddingRight="10%"
                >
                    <Button
                        variant="contained"
                        color="secondary"
                        href="/portfolio"
                    >
                        Portfolio
                    </Button>
                    <Button variant="contained" color="secondary" href="/about">
                        About
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        href="/process"
                    >
                        Process
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        href="/contact"
                    >
                        Contact
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
