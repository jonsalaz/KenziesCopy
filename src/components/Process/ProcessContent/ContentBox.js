import { Box, Typography } from "@mui/material";

function ContentBox(props) {
    return ( 
        <Box>
            <Typography variant="h4">{props.header}</Typography>
            <Typography variant="h6">{props.content}</Typography>
        </Box>
     );
}

export default ContentBox;