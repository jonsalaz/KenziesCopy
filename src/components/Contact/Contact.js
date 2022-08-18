import { Box } from "@mui/material";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ContactForm from "./ContactForm";

import bg from "./bg.jpg";

function Contact() {
    return (
        <Box
            height="100vh"
            width="100vw"
            sx={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
        >
            <Header />
            <ContactForm />
            <Footer />
        </Box>
    );
}

export default Contact;
