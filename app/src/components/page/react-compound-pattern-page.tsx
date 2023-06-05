import { Box, Typography } from "@mui/material";
import { ListingsProvider } from "../provider/context/ListingsProvider";
import Input from "../compound/Input";
import Listings from "../compound/Listings";

export default function ReactCompoundPattern() {
  return (
    <Box>
      <Typography variant="h2">Compound Pattern</Typography>
      <ListingsProvider>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '3em',
        }}
      >
        <Input />
        <Listings />
      </div>
    </ListingsProvider>
    </Box>
  );
}
