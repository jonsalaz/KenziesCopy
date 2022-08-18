import { Paper, Stack, Typography } from "@mui/material";
import ContactCard from "../../ContactCard/ContactCard";
import ContentBox from "./ContentBox";
import coffee from "./contentImages/Coffee.jpeg";
import kenzie from "./contentImages/KenzieGrass.jpeg";
import work from "./contentImages/WorkDesk.jpeg";

function ProcessContent() {
    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ margin: "0 10% 0 10%", margin: "25px" }}
        >
            <Stack
                direction="row"
                alignItems="stretch"
                justifyContent="center"
                spacing={8}
            >
                <Stack
                    direction="column"
                    justifyContent="space-evenly"
                    spacing={4}
                    alignItems="flex-start"
                    width="40%"
                >
                    <Typography variant="h2" noWrap>Here's How it Happens</Typography>

                    <ContentBox
                        header="First: A Conversation"
                        content="Reach out with some details about the project, and Kenzie will get back to you about scheduling a call. Your needs/wants can be discussed in greater detail at that time."
                    />

                    <ContentBox
                        header="Then, The Numbers"
                        content="Using the information discussed in the call, Kenzie will devise a quote. With your approval, the creative process will begin."
                    />

                    <ContentBox
                        header="Next: The Kick-Off"
                        content="After one last call during which the exact details/features of the project are discussed and a creative brief is composed, Kenzie gets to drafting."
                    />

                    <ContentBox content="After the initial draft is delivered within the discussed timeframe, Kenzie communicates with you until the final product is everything you're looking for—and more. She doesn't stop until you're satisfied." />

                    <ContentBox
                        header="Last: You Recieve kenzie's copy"
                        content="Kenzie will deliver you the final product and invoice you for payment. Once the invoice is paid, you watch kenzie's copy pay for itself. Until next time!"
                    />

                    <ContactCard />
                </Stack>

                <Stack
                    direction="column"
                    spacing={4}
                    width="25vw"
                    minHeight={"100%"}
                    justifyContent="space-evenly"
                >
                    <Paper elevation={2} component="img" src={coffee} />
                    <Paper elevation={2} component="img" src={work} />
                    <Paper elevation={2} component="img" src={kenzie} />
                </Stack>
            </Stack>
        </Stack>
    );
}

export default ProcessContent;
