import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function PortfolioItemDetails(props) {
    const { open, title, image, onClose, goal, challenge, solution } = props;
    return (
        <Dialog open={open} onClose={onClose} maxWidth="md">
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <Stack direction="row" spacing={2}>
                    <Paper
                        sx={{ maxHeight: "75vh" }}
                        component="img"
                        src={image}
                    />
                    <Stack direction="column" justifyContent="space-evenly">
                        <Typography variant="body1">
                            <b>Goal:</b> {goal}
                        </Typography>
                        <Typography variant="body1">
                            <b>Challenge:</b> {challenge}
                        </Typography>
                        <Typography variant="body1">
                            <b>Solution:</b> {solution}
                        </Typography>
                        <Button
                            component={Link}
                            to="/contact"
                            variant="contained"
                        >
                            Let's Talk Copy
                        </Button>
                    </Stack>
                </Stack>
            </DialogContent>
        </Dialog>
    );
}

export default PortfolioItemDetails;
