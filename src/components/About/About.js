import { Box } from "@mui/material";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AboutContent from "./AboutContent/AboutContent";

function About() {
    return ( 
        <Box
            sx={{
                bgcolor: "background.main",
                minHeight: "100vh",
                width: "100vw",
            }}
        >  
        <Header />
        <AboutContent />
        <Footer />
        </Box>
     );
}

export default About;