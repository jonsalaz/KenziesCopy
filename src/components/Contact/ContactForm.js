import {
    Backdrop,
    Button,
    CircularProgress,
    Divider,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");
    const [status, setStatus] = useState();
    const [open, setOpen] = useState(false);

    function sendEmail(e) {
        setOpen(true);
        emailjs
            .send(
                "service_d5jh09m",
                "template_ilo8wob",
                { firstName, lastName, email, content },
                "knKUl0SJGls41gEcm"
            )
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    setStatus("success");
                    setOpen(false);
                },
                (error) => {
                    console.log("FAILED...", error);
                    setStatus("error");
                    setOpen(false);
                }
            );
    }

    return (
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            width="100vw"
            height="calc(100vh - 250px)"
        >
            <Backdrop
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Paper elevation={4} sx={{ width: "50%", padding: "25px" }}>
                <Typography variant="h4" padding="10px">
                    Get In Touch
                </Typography>
                <Divider />
                <Stack
                    marginTop="10px"
                    spacing={6}
                    alignItems="flex-start"
                    justifyContent="space-around"
                    sx={{ label: { color: "text.primary" } }}
                >
                    <Stack direction="row" spacing={4}>
                        <TextField
                            variant="standard"
                            required
                            label="First Name"
                            autoComplete="off"
                            onChange={(e) => setFirstName(e.target.value)}
                        />

                        <TextField
                            required
                            type="text"
                            label="Last Name"
                            variant="standard"
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}
                        />
                    </Stack>
                    <TextField
                        required
                        type="email"
                        label="Email"
                        variant="standard"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <TextField
                        required
                        multiline
                        label="Email Contents"
                        variant="standard"
                        fullWidth
                        onChange={(e) => {
                            setContent(e.target.value);
                        }}
                    />
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Button variant="contained" onClick={sendEmail}>
                            Submit
                        </Button>
                        {status == "success" ? (
                            <Typography>Success!</Typography>
                        ) : (
                            <Typography></Typography>
                        )}
                        {status == "error" ? (
                            <Typography>Error...</Typography>
                        ) : (
                            <Typography></Typography>
                        )}
                    </Stack>
                </Stack>
            </Paper>
        </Stack>
    );
}

export default ContactForm;