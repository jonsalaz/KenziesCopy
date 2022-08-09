import styled from "@emotion/styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";
import { useState } from "react";
import PortfolioItemDetails from "./PortfolioItemDetails/PortfolioItemDetails";

function PortfolioItem(props) {
    const [open, setOpen] = useState(false);

    const handleClose= () => {
        setOpen(false);
    }

    return (
        <Grid item maxWidth={"25%"}>
            <PortfolioItemDetails
                open={open}
                onClose={handleClose}
                title={props.title}
                image={props.image}
                goal={props.goal}
                challenge={props.challenge}
                solution={props.solution}
            />
            <Card raised sx={{ height: "100%" }}>
                <Stack
                    height="100%"
                    direction="column"
                    justifyContent="space-around"
                >
                    <CardHeader title={props.title} />
                    <CardMedia
                        component="img"
                        image={props.image}
                        alt={props.alt}
                    />
                    <CardContent>
                        <Typography variant="body1">{props.summary}</Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Button
                            variant="contained"
                            onClick={() => setOpen(true)}
                        >
                            See More
                        </Button>
                    </CardActions>
                </Stack>
            </Card>
        </Grid>
    );
}

export default PortfolioItem;
