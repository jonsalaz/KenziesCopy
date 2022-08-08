import styled from "@emotion/styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Collapse,
    Grid,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";
import { useState } from "react";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

function PortfolioItem(props) {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Grid item maxWidth={"25%"}>
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
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography variant="body1">
                                <b>Goal:</b> {props.goal}
                            </Typography>
                            <Typography variant="body1">
                                <b>Challenge:</b> {props.challenge}
                            </Typography>
                            <Typography variant="body1">
                                <b>Solution:</b> {props.solution}
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Stack>
            </Card>
        </Grid>
    );
}

export default PortfolioItem;
