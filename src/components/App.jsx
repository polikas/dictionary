import "../styling/App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import WordCard from "./WordCard";
import { getDefinition } from "../api";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import Footer from "./Footer";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [definitions, setDefinition] = useState([]);
  const [showDefinition, setShowDefinition] = useState(false);

  const handleInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSearch = () => {
    getDefinition(userInput).then((wordData) => {
      setDefinition(wordData);
      setShowDefinition(true);
    });
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#007FFF",
        dark: "#0066CC",
      },
    },
  });

  return (
    <>
      <div className="content-container">
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
                width: "auto",
                height: "auto",
                borderRadius: 1,
                bgcolor: "primary.main",
                "&:hover": {
                  bgcolor: "primary.dark",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Type a word"
                variant="standard"
                onChange={handleInput}
              />
            </Box>
            <Button variant="contained" onClick={handleSearch}>
              GET DEFINITION
            </Button>
          </Box>
          {showDefinition &&
            definitions.map((definition, index) => (
              <WordCard key={index} definition={definition} />
            ))}
        </ThemeProvider>
      </div>
      <Footer />
    </>
  );
};

export default App;
