import { Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ContactCard from "../../ContactCard/ContactCard";
import ContentBox from "./ContentBox";

function ProcessContent() {
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => {
            images[item.replace("./", "")] = r(item);
        });
        return images;
    }

    const images = importAll(
        require.context("./contentImages", false, /\.(png|jpe?g|svg)$/)
    );

    console.log(images);

    return (
        <Stack
            direction="column"
            justifyContent="center"
            spacing={2}
            sx={{ color: "text.secondary", margin: "0 10% 0 10%" }}
        >
            <Typography variant="h2">Here's How it Happens</Typography>
            <Stack direction="row">
                <Stack direction="column" spacing={4} alignItems="flex-start">
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

                <Stack direction="column" spacing={4}>
                    
                </Stack>
            </Stack>
        </Stack>
    );
}

export default ProcessContent;
