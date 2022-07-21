import { Box } from "@mui/material";
import ContactCard from "../ContactCard/ContactCard";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ProcessContent from "./ProcessContent/ProcessContent";

function Process() {
    return ( 
        <Box
            sx={{
                bgcolor: "background.main",
                minHeight: "100vh",
                width: "100vw",
            }}
        >
            <Header />
            <ProcessContent />
            <Footer />
        </Box>
     );
}

export default Process;