import axios from "axios";

export const getDefinition = (word) => {
  const response = axios
    .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((wordData) => wordData.data);
  return response;
};

// console.log(wordData.data);
// console.log(wordData.data[0].meanings[0].definitions[0].definition);
// getDefinition("hello");
