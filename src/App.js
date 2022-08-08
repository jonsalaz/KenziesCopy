import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import Process from "./components/Process/Process.js";
import Portfolio from "./components/Portfolio/Portfolio.js";
import Contact from "./components/Contact/Contact.js";

function App() {
    const theme = createTheme({
        palette: {
            mode: "dark",
            primary: {
                main: "#F7E6D1",
            },
            secondary: {
                main: "#3E5641",
            },
            text: {
                primary: "#000000",
                secondary: "#ffffff",
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="process" element={<Process />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
