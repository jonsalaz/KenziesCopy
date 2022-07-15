import { Box } from "@mui/system";
import Header from "../Header/Header";

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
            
        </Box>
    );
}

export default Home;