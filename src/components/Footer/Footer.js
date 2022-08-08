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
            <Box
                width="100%"
                height="50px"
                bgcolor="primary.main"
                padding="10px"
            />
            <Paper
                sx={{
                    width: "95vw",
                    height: "75px",
                    position: "absolute",
                    bgcolor: "white",
                    color: "text.secondary"
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        position: "absolute",
                        right: "33%",
                        top: "10%"
                    }}
                >
                    <b>kenzie's copy</b>
                </Typography>
                <Typography
                    sx={{ position: "absolute", right: "30%", top: "60%" }}
                >
                    Bold. Clever. Connective.
                </Typography>
            </Paper>
        </Box>
    );
}

export default Footer;
