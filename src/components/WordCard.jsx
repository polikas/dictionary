import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState } from "react";

const WordCard = ({ definition }) => {
  const [audioInstance, setAudioInstance] = useState(null);

  const playAudio = (audioUrl) => {
    if (audioInstance) {
      audioInstance.pause();
    }
    const newAudioInstance = new Audio(audioUrl);
    newAudioInstance.play();
    setAudioInstance(newAudioInstance);
  };

  return (
    <Card sx={{ minWidth: 275, border: "1px solid", borderColor: "grey.300" }}>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          Phonetics
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Definition: {definition.word}
        </Typography>
        {definition.phonetics.map((phonetic, index) => (
          <Box
            key={index}
            sx={{ mb: 1, display: "flex", alignItems: "center" }}
          >
            {phonetic.text && (
              <Typography
                sx={{ fontSize: 14, mr: 1 }}
                color="text.secondary"
                gutterBottom
              >
                Text: {phonetic.text}
              </Typography>
            )}
            {phonetic.audio && (
              <>
                <Typography
                  sx={{ fontSize: 14, mr: 1 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Audio:
                </Typography>
                <IconButton
                  onClick={() => playAudio(phonetic.audio)}
                  color="primary"
                  aria-label="play audio"
                >
                  <PlayArrowIcon />
                </IconButton>
              </>
            )}
          </Box>
        ))}
      </CardContent>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          Meanings
        </Typography>
        {definition.meanings.map((meaning, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              Part of Speech: {meaning.partOfSpeech}
            </Typography>
            {meaning.definitions.map((def, defIndex) => {
              if (defIndex > 0) {
                return null;
              }
              return (
                <Box key={defIndex} sx={{ mb: 1 }}>
                  <Typography variant="body2" gutterBottom>
                    Definition: {def.definition}
                  </Typography>
                  {def.example && (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      gutterBottom
                    >
                      Example: {def.example}
                    </Typography>
                  )}
                </Box>
              );
            })}
            {meaning.synonyms.length > 0 && (
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Synonyms: {meaning.synonyms.join(", ")}
              </Typography>
            )}
            {meaning.antonyms.length > 0 && (
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Antonyms: {meaning.antonyms.join(", ")}
              </Typography>
            )}
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default WordCard;
