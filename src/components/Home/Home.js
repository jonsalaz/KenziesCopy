import { Container, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ContactCard from "../ContactCard/ContactCard";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import portrait from "./KenzieRoss_Headshot.jpeg";

function Home() {
    return (
        <Box
            sx={{
                bgcolor: "background.main",
                minHeight: "100vh",
                width: "100vw",
            }}
        >
            <Header />
            <Stack padding="2% 10% 2% 10%">
                <Typography variant="h1">
                    <b>Bold. Clever. Connective.</b>
                </Typography>
                <Typography variant="h4">
                    Kenzie's Copy Resonates—and Keeps Them Coming Back.
                </Typography>
            </Stack>
            <Box
                width="100vw"
                bgcolor="primary.main"
                padding="10px 10px 10px 10px"
                elevation="1"
                component={Paper}
            >
                <Typography
                    variant="h4"
                    color="text.secondary"
                    padding="0 0 0 10%"
                >
                    You're the Main Character
                </Typography>
            </Box>

            <Container
                disableGutters
                maxWidth="xl"
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "50px"
                }}
            >
                <Typography variant="h5" width="33%">
                    Kenzie’s background as an actor, reader/writer, and
                    Communications student renders her abundantly capable of
                    <b> fostering connection, capturing attention,</b>
                    and<b> tapping into the truth;</b> discovering what your
                    audience really wants, and which messages will move them.
                </Typography>

                <Paper
                    component="img"
                    src={portrait}
                    elevation={24}
                    sx={{ margin: "10px 10px 10px 0px" }}
                />

                <Stack width="33%" spacing={8}>
                    <Typography variant="h5">
                        They say acting is all about the "other person"—in this
                        case, that “other person” is you.
                    </Typography>
                    <Typography variant="h5">
                        You have a business, a product, something to say—but
                        maybe you don’t have the words. Kenzie does have the
                        words—
                        <b>
                            <i>and she wants to tell your story.</i>
                        </b>
                    </Typography>
                </Stack>
            </Container>
            <ContactCard />
            <div style={{padding: "25px"}}>{null}</ div>
            <Footer />
        </Box>
    );
}

export default Home;
