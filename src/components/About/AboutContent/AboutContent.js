import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Kenzie from "./AboutKenzie.jpeg";

function AboutContent() {
    return (
        <Box
            minHeight='calc(100vh - 250px)'
            width="100vw"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "25px"
            }}
        >
            <Stack direction="row" spacing={10} margin="0 10% 0 10%">
                <Stack
                    direction="column"
                    alignItems="flex-start"
                    justifyContent="center"
                    spacing={4}
                >
                    <Typography variant="h2">
                        The Kenzie Behind the Copy
                    </Typography>
                    <Typography variant="h4">An Empathy Expert</Typography>
                    <Typography variant="body1">Hi, i'm Kenzie.</Typography>
                    <Typography variant="body1">
                        My work is all about understanding others. Our
                        similarities, our differences.
                        <b>
                            How to send messages—and ensure they're understood.
                        </b>
                        How someone in any set of circumstances would really,
                        truly be feeling and behaving at any given moment. All
                        of that—
                        <b>
                            the reaching out, the asking questions, the
                            empathy—is what makes my copy sing.
                        </b>
                    </Typography>
                    <Typography variant="body1">
                        My role {"("}and the fuel to my fire{")"} is to always
                        be asking: what does this person really want? How do
                        they really feel? What would they be most likely to do?
                        The answers I come up with result in
                        <b>
                            copy that speaks directly to the desires and
                            emotions of your target audience—which you'll notice
                            in your bottom line.
                        </b>
                        The consumer gets what they want, and so do
                        you—everybody wins.
                    </Typography>
                    <Typography>So, that's me.</Typography>
                    <Typography>Ready to get busy?</Typography>
                    <Button component={Link} to="/contact" variant="contained">
                        Let's Talk Copy
                    </Button>
                </Stack>
                <Box component="img" src={Kenzie} />
            </Stack>
        </Box>
    );
}

export default AboutContent;
