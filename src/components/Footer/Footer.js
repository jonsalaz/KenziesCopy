import { Box, Paper, Typography } from "@mui/material";

function Footer() {
    return (
        <Box
            sx={{
                margin: "25px 0px 25px 0px",
                height: "75px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Paper
                elevation={4}
                sx={{
                    width: "95vw",
                    height: "75px",
                    position: "absolute",
                    bgcolor: "primary.main",
                    color: "text.secondary",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Typography
                    variant="h4"
                >
                    <b>kenzie's copy</b>
                </Typography>
                <Typography>
                    Bold. Clever. Connective.
                </Typography>
            </Paper>
        </Box>
    );
}

export default Footer;
