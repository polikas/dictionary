import { Card, CardContent, Typography } from "@mui/material";

const WordCard = ({ definition }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Definition: {definition}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WordCard;
