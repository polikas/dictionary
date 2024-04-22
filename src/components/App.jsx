import "../styling/App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import WordCard from "./WordCard";
import { getDefinition } from "../api";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [definition, setDefinition] = useState([]);
  const [showDefinition, setShowDefinition] = useState(false);

  const handleInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSearch = () => {
    getDefinition(userInput).then((wordData) => {
      setDefinition(wordData[0].meanings[0].definitions[0].definition);
    });
    setShowDefinition(true);
  };

  // useEffect(() => {

  // }, []);

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
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
        DEFINITION
      </Button>
      {showDefinition && <WordCard definition={definition} />}
    </>
  );
};

export default App;
