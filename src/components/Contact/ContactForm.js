import {
    Button,
    Divider,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

function ContactForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <Box
            maxWidth="50%"
            color="text.secondary"
            sx={{
                input: { color: "text.secondary" },
                textArea: { color: "text.secondary" },
            }}
        >
            <Typography variant="h4" padding="10px">
                Contact Me
            </Typography>
            <Divider />
            <Stack spacing={2}>
                <Stack
                    direction="row"
                    spacing={4}
                    justifyContent="space-between"
                >
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
                    <TextField
                        required
                        type="email"
                        label="Email"
                        variant="standard"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </Stack>
                <TextField
                    required
                    multiline
                    label="Email Contents"
                    variant="standard"
                    fullWidth
                />
                <Button variant="contained">Submit</Button>
            </Stack>
        </Box>
    );
}

export default ContactForm;
