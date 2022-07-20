import { Button, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

function ContactCard() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                margin: "25px",
            }}
        >
            <Paper variant="outlined" elevation={24}>
                <Stack
                    alignItems="center"
                    bgcolor="primary.main"
                    sx={{ padding: "25px" }}
                >
                    <Typography variant="h4" textAlign="center">
                        Have a story to tell?
                    </Typography>
                    <Typography textAlign="center">
                        Copy that. Kenzie can help.
                    </Typography>
                    <Button
                        component={Link}
                        to="/contact"
                        width="50%"
                        variant="contained"
                        color="secondary"
                        sx={{ margin: "5px" }}
                    >
                        Chat with Kenzie
                    </Button>
                </Stack>
            </Paper>
        </Box>
    );
}

export default ContactCard;
